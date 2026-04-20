import { Database } from './supabase';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  slug_url: string;
  main_image_url: string | null;
  images_url: string[] | null;
  artist_id: number | null;
  status: Database['public']['Enums']['availability'];
  medium: Database['public']['Enums']['medium'];
  created_at: string;
}
