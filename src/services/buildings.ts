import { supabase } from '@/lib/supabase';
import { House } from '@/lib/types';

export const getBuildings = async (): Promise<House[]> => {
  const { data, error } = await supabase
    .from('buildings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getBuildingBySlug = async (slug: string): Promise<House | null> => {
  const { data, error } = await supabase
    .from('buildings')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
};
