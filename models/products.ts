export interface ProductsResult {
    results: Array<Product>;
}

export interface Product {
    productSku: string;
    productName: string;
    productCollection?: string;
    productCategoryHierarchy: string;
    productMeasurements: ProductMeasurements;
    productPrice: string;
    productPriceDiscount: number;
    productImageUrl: string;
    store: string;
    ecoPart: string;
    productMaterials: string;
    productUsage: string;
    productAssemblyTime: number;
    productAssemblyDescription: string;
}

export interface ProductMeasurements {
    height: string
    width: string
    length: string
}
