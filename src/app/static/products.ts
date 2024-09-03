import { TProduct } from "../types/Product";

const products: TProduct[] = [
    {
        price: 20,
        name: "Lira Earrings",
        image: "/Products/product4.png",
        slug: "lira-earrings",
        description: "Introducing the Lira Earrings, a symbol of sophistication and elegance. These earrings are designed to add a touch of glamour to any outfit, whether for a formal event or a casual day out. Crafted with high-quality sterling silver, they feature a stunning finish that catches the light beautifully. Perfect for those who appreciate timeless jewelry with a modern twist.",
        additionalInfo: {
            weight: "0.2 kg",
            dimensions: "10 x 5 x 1 cm",
            colours: "Gold, Silver",
            material: "Sterling Silver"
        },
        category: "Jewelry",
        SKU: "LE-001",
        discount: 0,
        quantity: 0
    },
    {
        price: 20,
        name: "Yuki Hair Pin Set of 3",
        image: "/Products/product1.png",
        slug: "yuki-hair-pin-set-of-3",
        description: "Elevate your hairstyling game with the Yuki Hair Pin Set. This set of three elegant hair pins is perfect for securing your hair with style. Each pin features a delicate design and is crafted from alloy for durability and shine. Whether you're dressing up for a special occasion or just adding a touch of flair to your everyday look, these pins will keep your hair in place while enhancing your overall appearance.",
        additionalInfo: {
            weight: "0.1 kg",
            dimensions: "5 x 2 x 0.5 cm (each pin)",
            colours: "Rose Gold, Silver",
            material: "Alloy"
        },
        category: "Hair Accessories",
        SKU: "YHP-003",
        discount: 6,
        quantity: 0
    },
    {
        price: 20,
        name: "Plaine Necklace",
        image: "/Products/product2.png",
        slug: "plaine-necklace",
        description: "The Plaine Necklace is a timeless piece that adds understated elegance to any wardrobe. Featuring a sleek and minimalist design, this necklace is perfect for layering or wearing alone for a refined look. The brass material provides a warm and durable finish, making it a versatile addition to your jewelry collection. Whether you're attending a formal event or just want to add a touch of sophistication to your everyday outfit, this necklace is the ideal choice.",
        additionalInfo: {
            weight: "0.3 kg",
            dimensions: "40 cm chain length",
            colours: "Gold, Silver",
            material: "Brass"
        },
        category: "Jewelry",
        SKU: "PN-007",
        discount: 0,
        quantity: 0
    },
    {
        price: 20,
        name: "Hair Pin Set of 3",
        image: "/Products/product3.png",
        slug: "hair-pin-set-of-3",
        description: "Practical and stylish, the Hair Pin Set of 3 is designed to keep your hair neatly in place while adding a chic touch to your look. Made from durable plastic, these pins are lightweight and easy to use. Ideal for everyday wear or special occasions, they offer a versatile solution for securing your hair without compromising on style.",
        additionalInfo: {
            weight: "0.15 kg",
            dimensions: "6 x 0.5 x 0.5 cm (each pin)",
            colours: "Black, Brown",
            material: "Plastic"
        },
        category: "Hair Accessories",
        SKU: "HPS-009",
        discount: 0,
        quantity: 0
    },
    {
        price: 20,
        name: "Kaede Hair Pin Set Of 3",
        image: "/Products/product5.png",
        slug: "kaede-hair-pin-set-of-3",
        description: "The Kaede Hair Pin Set of 3 is designed to make a statement. Each pin features a unique design crafted from resin, giving them a modern and artistic look. Available in a delightful mix of blue and pink, these pins are perfect for adding a pop of color and style to any hairstyle. Ideal for both casual and formal occasions, the Kaede set combines functionality with fashion-forward design.",
        additionalInfo: {
            weight: "0.2 kg",
            dimensions: "6 x 1 x 0.5 cm (each pin)",
            colours: "Blue, Pink",
            material: "Resin"
        },
        category: "Hair Accessories",
        SKU: "KHPS-012",
        discount: 14,
        quantity: 0
    },
    {
        price: 20,
        name: "Hal Earrings",
        image: "/Products/product6.png",
        slug: "hal-earrings",
        description: "Enhance your look with the Hal Earrings, a perfect blend of sophistication and charm. Crafted from copper, these earrings offer a luxurious feel and a striking appearance. The elegant design is complemented by a choice of silver and rose gold finishes, making them a versatile accessory for any outfit. Whether you're heading to a special event or just adding a touch of glamour to your everyday style, the Hal Earrings are sure to impress.",
        additionalInfo: {
            weight: "0.25 kg",
            dimensions: "12 x 7 x 1 cm",
            colours: "Silver, Rose Gold",
            material: "Copper"
        },
        category: "Jewelry",
        SKU: "HE-015",
        discount: 0,
        quantity: 0
    },
];

export default products;
