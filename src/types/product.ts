export interface ProductResponse {
  success: boolean;
  message: string | null;
  data: ProductCategory[];
}

export interface ProductCategory {
  productCategoryID: number;
  parentID: number | null;
  categoryTypeID: number;
  categoryName: string | null;
  categorySlug: string | null;
  categoryDetail: CategoryDetail;
  categoryAvailableVariants: any; // TODO: Define specific type when info available
  viewType: number;
  seo: SEO;
  language: string | null;
  productBrandID: number | null;
  releaseDate: string | null;
  systemRequirements: string | null;
  howToUse: string | null;
  age: number | null;
  region: string | null;
  platform: string | null;
  officialWebSite: string | null;
}

interface CategoryDetail {
  categoryDescription: string | null;
  categoryMainImage: string | null;
  categoryImages: any; // TODO: Define specific type when info available
}

interface SEO {
  meta_key: string[];
  meta_title: string | null;
  meta_description: string | null;
} 