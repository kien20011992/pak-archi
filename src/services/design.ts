import { supabase } from '@/lib/supabase';
import { House } from '@/lib/types';

export const getDesigns = async (): Promise<House[]> => {
  const { data, error } = await supabase
    .from('design')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getDesignBySlug = async (slug: string): Promise<House | null> => {
  const { data, error } = await supabase
    .from('design')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
};
