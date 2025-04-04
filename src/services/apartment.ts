import { supabase } from '@/lib/supabase';
import { House } from '@/lib/types';

export const getApartments = async (): Promise<House[]> => {
  const { data, error } = await supabase
    .from('apartment')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getApartmentBySlug = async (slug: string): Promise<House | null> => {
  const { data, error } = await supabase
    .from('apartment')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
};
