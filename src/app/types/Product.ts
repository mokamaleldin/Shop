export interface TProduct {
    price: number;
    name: string;
    image: string;
    slug?: string;
    description: string;
    additionalInfo: {
        weight: string;
        dimensions: string;
        colours: string;
        material: string;
    }
}