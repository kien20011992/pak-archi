import { supabase } from '@/lib/supabase';
import { House } from '@/lib/types';

export const getCommercials = async (): Promise<House[]> => {
  const { data, error } = await supabase
    .from('commercial')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getCommercialBySlug = async (slug: string): Promise<House | null> => {
  const { data, error } = await supabase
    .from('commercial')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
};
