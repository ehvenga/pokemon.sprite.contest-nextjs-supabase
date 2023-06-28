import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  // @ts-ignore
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default supabase;
