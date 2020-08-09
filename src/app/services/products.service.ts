import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];

  constructor() { }

  productList() {
    this.products = [
      {
        id: 1,
        name: "Womens Long Sweater",
        description: `100% Polyester. Soft lightweight and stretchy material feels wonderful against your skin. <br/><br/> Our cardigan vests feature lapel collar, open front, solid color, two side pockets, draped, loose fitting, thigh length, warm sweater vets, long vests, sleeveless cardigans with unique trim, pretty nice for a fun layered look.`,
        price: 35.99,
        discountPrice: 30,
        images: ["assets/images/products/product-1.1.jpg", "assets/images/products/product-1.2.jpg", "assets/images/products/product-1.3.jpg"],
        color: ["#CECE45", "#F951E2", "#CF0114"],
        size: ["S", "M", "L"],
        quantity: 1,
        isWishlist: false
      },
      {
        id: 2,
        name: "Men's Sleeve T-Shirt",
        description: "60% Cotton/40% Polyester, Imported, Adjustable closure, Machine Wash, Original fit",
        price: 65.90,
        discountPrice: 50,
        images: ["assets/images/products/product-2.1.jpg", "assets/images/products/product-2.2.jpg"],
        color: ["#CECE45", "#F951E2", "#CF0114"],
        size: ["S", "M", "L"],
        quantity: 1,
        isWishlist: false
      },
      {
        id: 3,
        name: "Triple Zip Pocket Large Crossbody Bag",
        description: `Zipper closure, Adjustable shoulder strap with 24" drop, Faux leather & gold tone hardware, 1 zipper pocket & 1 open pocket inside`,
        price: 55.50,
        discountPrice: 45,
        images: ["assets/images/products/product-3.1.jpg"],
        color: ["#CECE45", "#F951E2", "#CF0114"],
        size: ["S", "M", "L"],
        quantity: 1,
        isWishlist: true
      },
      {
        id: 4,
        name: "Apple Watch Resin",
        description: "RESIN MATERIAL: Each resin band is handmade, gorgeous and beautiful. The band made of resin material is lightweight, only about 30g, which is equivalent to one third of the weight of a metal band. At the same time, it is waterproof, wear-resistant, not easy to break, and more comfortable to wear.",
        price: 100,
        discountPrice: 95,
        images: ["assets/images/products/product-4.1.jpg", "assets/images/products/product-4.2.jpg"],
        color: ["#CECE45", "#F951E2", "#CF0114"],
        size: ["S", "M", "L"],
        quantity: 1,
        isWishlist: false
      },
      {
        id: 5,
        name: "Essential Oil Diffuser Bracelet",
        description: "This is anxiety ease essential oil diffusing bracelet Jewelry for women. You can drop your favorite essential oil or perfume on it to calms emotions,relieves tension and stress in daily busy work, driving, sleeping, long-distance travel, overseas business trips.",
        price: 98.00,
        discountPrice: 90,
        images: ["assets/images/products/product-10.1.jpg"],
        color: ["#CECE45", "#F951E2", "#CF0114"],
        size: ["S", "M", "L"],
        quantity: 1,
        isWishlist: true
      },
      {
        id: 6,
        name: "Women Metallic Running Shoes",
        description: "Women running shoes with iridescent metallic PU has durable MD sole,non-slip, lace up for adjustment and added comfort.",
        price: 55.50,
        discountPrice: 40,
        images: ["assets/images/products/product-5.1.jpg"],
        color: ["#CECE45", "#F951E2", "#CF0114"],
        size: ["S", "M", "L"],
        quantity: 1,
        isWishlist: true
      },
      {
        id: 7,
        name: "Acer Aspire 5 Slim Laptop",
        description: "AMD Ryzen 3 3200U Dual Core Processor (Up to 3.5GHz); 4GB DDR4 Memory; 128GB PCIe NVMe SSD",
        price: 40.45,
        discountPrice: 30,
        images: ["assets/images/products/product-6.1.jpg"],
        color: ["#CECE45", "#F951E2", "#CF0114"],
        size: ["S", "M", "L"],
        quantity: 1,
        isWishlist: true
      },
      {
        id: 7,
        name: "Sony Noise Cancelling Headphones",
        description: "Industry leading ANC lends a personalized, virtually soundproof experience",
        price: 65,
        discountPrice: 50,
        images: ["assets/images/products/product-7.1.jpg"],
        color: ["#CECE45", "#F951E2", "#CF0114"],
        size: ["S", "M", "L"],
        quantity: 1,
        isWishlist: false
      },
      {
        id: 8,
        name: "Electric Spice and Coffee Grinder",
        description: "Transforms whole coffee beans into freshly ground coffee in less than 10 seconds; perfectly grinds nuts, seeds, herbs, and spices",
        price: 70.50,
        discountPrice: 60,
        images: ["assets/images/products/product-8.1.jpg"],
        color: ["#CECE45", "#F951E2", "#CF0114"],
        size: ["S", "M", "L"],
        quantity: 1,
        isWishlist: true
      },
      {
        id: 9,
        name: "Baby Feet and Fingers Socks Set",
        description: "The baby wrist rattle made from organic cotton and soft skin material, give your baby a soft feeling. Our baby sock toys with bright colors but will not fade.",
        price: 80,
        discountPrice: 75,
        images: ["assets/images/products/product-9.1.jpg"],
        color: ["#CECE45", "#F951E2", "#CF0114"],
        size: ["S", "M", "L"],
        quantity: 1,
        isWishlist: false
      }
    ];

    return this.products;
  }
}
