import { TProduct } from "../types/Product";

const products: TProduct[] = [
    {
        price: 20,
        name: "Lira Earrings",
        image: "/Products/product4.png",
        slug: "lira-earrings",
        description: "Elegant Lira Earrings, perfect for any occasion. Made with high-quality materials to give you a classy look.",
        additionalInfo: {
            weight: "0.2 kg",
            dimensions: "10 x 5 x 1 cm",
            colours: "Gold, Silver",
            material: "Sterling Silver"
        }
    },
    {
        price: 20,
        name: "Yuki Hair Pin Set of 3",
        image: "/Products/product1.png",
        slug: "yuki-hair-pin-set-of-3",
        description: "Charming Yuki Hair Pin Set, includes three stylish pins to keep your hair perfectly in place.",
        additionalInfo: {
            weight: "0.1 kg",
            dimensions: "5 x 2 x 0.5 cm (each pin)",
            colours: "Rose Gold, Silver",
            material: "Alloy"
        }
    },
    {
        price: 20,
        name: "Plaine Necklace",
        image: "/Products/product2.png",
        slug: "plaine-necklace",
        description: "Simple yet elegant Plaine Necklace, a versatile accessory that complements any outfit.",
        additionalInfo: {
            weight: "0.3 kg",
            dimensions: "40 cm chain length",
            colours: "Gold, Silver",
            material: "Brass"
        }
    },
    {
        price: 20,
        name: "Hair Pin Set of 3",
        image: "/Products/product3.png",
        slug: "hair-pin-set-of-3",
        description: "Practical Hair Pin Set of 3, ideal for securing your hair while adding a touch of style.",
        additionalInfo: {
            weight: "0.15 kg",
            dimensions: "6 x 0.5 x 0.5 cm (each pin)",
            colours: "Black, Brown",
            material: "Plastic"
        }
    },
    {
        price: 20,
        name: "Kaede Hair Pin Set Of 3",
        image: "/Products/product5.png",
        slug: "kaede-hair-pin-set-of-3",
        description: "Beautiful Kaede Hair Pin Set, comes with three uniquely designed pins to enhance your hairstyle.",
        additionalInfo: {
            weight: "0.2 kg",
            dimensions: "6 x 1 x 0.5 cm (each pin)",
            colours: "Blue, Pink",
            material: "Resin"
        }
    },
    {
        price: 20,
        name: "Hal Earrings",
        image: "/Products/product6.png",
        slug: "hal-earrings",
        description: "Sophisticated Hal Earrings, crafted to add elegance and charm to your look.",
        additionalInfo: {
            weight: "0.25 kg",
            dimensions: "12 x 7 x 1 cm",
            colours: "Silver, Rose Gold",
            material: "Copper"
        }
    },
];

export default products;
