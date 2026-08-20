-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Knowledge Base Categories
CREATE TABLE kb_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_ar TEXT NOT NULL,
  name_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description_ar TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Knowledge Base Articles
CREATE TABLE kb_articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title_ar TEXT NOT NULL,
  title_en TEXT,
  content_ar TEXT NOT NULL,
  content_en TEXT,
  category_id UUID REFERENCES kb_categories(id) ON DELETE SET NULL,
  slug TEXT UNIQUE NOT NULL,
  meta_description_ar TEXT,
  is_published BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Client Profiles
CREATE TABLE client_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name_ar TEXT,
  full_name_en TEXT,
  phone TEXT,
  preferred_language TEXT DEFAULT 'ar',
  nationality TEXT,
  current_visa_status TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Client Documents
CREATE TABLE client_documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES client_profiles(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  document_type TEXT,
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Client Bookings
CREATE TABLE client_bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES client_profiles(id) ON DELETE SET NULL,
  calendly_event_id TEXT UNIQUE,
  appointment_date TIMESTAMPTZ,
  service_type TEXT,
  status TEXT DEFAULT 'booked' CHECK (status IN ('booked', 'completed', 'cancelled', 'no_show')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Client Invoices
CREATE TABLE client_invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES client_profiles(id) ON DELETE SET NULL,
  stripe_invoice_id TEXT UNIQUE,
  stripe_payment_intent_id TEXT,
  amount INTEGER NOT NULL, -- in pence
  currency TEXT DEFAULT 'gbp',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'failed', 'refunded')),
  description TEXT,
  service_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  paid_at TIMESTAMPTZ
);

-- Chat History (for AI agent)
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES client_profiles(id) ON DELETE SET NULL,
  session_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_kb_articles_category ON kb_articles(category_id);
CREATE INDEX idx_kb_articles_slug ON kb_articles(slug);
CREATE INDEX idx_kb_articles_published ON kb_articles(is_published);
CREATE INDEX idx_client_documents_client ON client_documents(client_id);
CREATE INDEX idx_client_bookings_client ON client_bookings(client_id);
CREATE INDEX idx_client_bookings_date ON client_bookings(appointment_date);
CREATE INDEX idx_client_invoices_client ON client_invoices(client_id);
CREATE INDEX idx_chat_messages_session ON chat_messages(session_id);
CREATE INDEX idx_chat_messages_client ON chat_messages(client_id);

-- Row Level Security (RLS) policies
ALTER TABLE client_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Client profiles: Users can only read/update their own profile
CREATE POLICY "Users can view own profile" ON client_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON client_profiles
  FOR UPDATE USING (auth.uid() = id);

-- Client documents: Users can only access their own documents
CREATE POLICY "Users can view own documents" ON client_documents
  FOR SELECT USING (client_id = auth.uid());

CREATE POLICY "Users can upload own documents" ON client_documents
  FOR INSERT WITH CHECK (client_id = auth.uid());

CREATE POLICY "Users can delete own documents" ON client_documents
  FOR DELETE USING (client_id = auth.uid());

-- Client bookings: Users can only view their own bookings
CREATE POLICY "Users can view own bookings" ON client_bookings
  FOR SELECT USING (client_id = auth.uid());

-- Client invoices: Users can only view their own invoices
CREATE POLICY "Users can view own invoices" ON client_invoices
  FOR SELECT USING (client_id = auth.uid());

-- Chat messages: Users can only access their own chat history
CREATE POLICY "Users can view own chat messages" ON chat_messages
  FOR SELECT USING (client_id = auth.uid());

CREATE POLICY "Users can insert own chat messages" ON chat_messages
  FOR INSERT WITH CHECK (client_id = auth.uid());

-- Knowledge base: Public read access for published articles
CREATE POLICY "Public can view published articles" ON kb_articles
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public can view categories" ON kb_categories
  FOR SELECT USING (true);

-- Admin policies (for staff users - you'll need to create an admin role)
-- These are placeholder policies - customize based on your needs
CREATE POLICY "Admins can do everything with kb_articles" ON kb_articles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.uid() = id
      AND raw_user_meta_data->>'role' = 'admin'
    )
  );

CREATE POLICY "Admins can do everything with kb_categories" ON kb_categories
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.uid() = id
      AND raw_user_meta_data->>'role' = 'admin'
    )
  );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_kb_articles_updated_at
  BEFORE UPDATE ON kb_articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_client_profiles_updated_at
  BEFORE UPDATE ON client_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert default categories
INSERT INTO kb_categories (name_ar, name_en, slug, description_ar, display_order) VALUES
  ('فيزا الزوج/الزوجة', 'Spouse Visa', 'visa-spouse', 'معلومات عن تأشيرة الشريك في المملكة المتحدة', 1),
  ('فيزا العمل', 'Work Visa', 'visa-work', 'معلومات عن تأشيرة العمل والerdale المهرة', 2),
  ('لم الشمل', 'Family Reunification', 'visa-family', 'معلومات عن لم الشمل العائلي', 3),
  ('اللجوء والحماية', 'Asylum & Protection', 'visa-asylum', 'معلومات عن طلبات اللجوء والحماية', 4),
  ('الإقامة غير الشرعية', 'Overstay & Status', 'immigration-overstay', 'معلومات عن الإقامة غير الشرعية وحالة الهجرة', 5),
  ('فيزا الطلاب', 'Student Visa', 'visa-student', 'معلومات عن تأشيرة الطلاب', 6),
  ('الإقامة الدائمة', 'Settlement & ILR', 'settlement-ilr', 'معلومات عن الإقامة الدائمة والجنسية', 7);
