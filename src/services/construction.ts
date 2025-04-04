import { supabase } from '@/lib/supabase';
import { House } from '@/lib/types';

export const getConstructions = async (): Promise<House[]> => {
  const { data, error } = await supabase
    .from('construction')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getConstructionBySlug = async (slug: string): Promise<House | null> => {
  const { data, error } = await supabase
    .from('construction')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
};
