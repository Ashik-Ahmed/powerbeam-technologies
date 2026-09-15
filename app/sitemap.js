import { SITE_URL } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
export default function sitemap(){
 const pages=["","/about","/products","/solutions","/services","/partnership","/resources","/industries","/contact","/become-partner","/compare"];
 const now=new Date();
 return [...pages.map(p=>({url:`${SITE_URL}${p}`,lastModified:now,changeFrequency:"weekly",priority:p===""?1:.8})),...PRODUCTS.map(p=>({url:`${SITE_URL}/products/${p.slug}`,lastModified:now,changeFrequency:"monthly",priority:.9}))];
}