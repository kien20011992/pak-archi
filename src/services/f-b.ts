import { supabase } from '@/lib/supabase';
import { House } from '@/lib/types';

export const getFbs = async (): Promise<House[]> => {
  const { data, error } = await supabase
    .from('f-b')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getFbBySlug = async (slug: string): Promise<House | null> => {
  const { data, error } = await supabase
    .from('f-b')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
};
