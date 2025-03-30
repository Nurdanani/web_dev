export interface Product{
    id:number;
    name:string;
    description:string;
    images:string[];
    rating:number;
    link:string;
    likes:number;
}

export interface Category{
    id : number;
    name:string;
    products: Product[];
}
