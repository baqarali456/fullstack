import { useState } from "react"
import Navbar from "./Navbar"
import Button from "./Button";

 
const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      category:"clothes"
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '/',
      imageSrc: 'https://media.licdn.com/dms/image/C5612AQFamxUV_dRv6A/article-cover_image-shrink_600_2000/0/1648203145158?e=2147483647&v=beta&t=5xwq7EIpmOY9Y8tv1ltIembnyoBRSJbxnB_kkuS1v4U',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      category:"clothes"
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '/',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      category:"clothes"
    },
    {
      id: 4,
      name: 'Huawei Mate20 Pro',
      href: '/',
      imageSrc: 'https://m.media-amazon.com/images/I/71hCsrR3XiL.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      category: 'electronic',
    },
    {
      id: 5,
      name: 'Samsung S8',
      href: '/',
      imageSrc: 'https://freepngimg.com/thumb/samsung_mobile_phone/5-2-samsung-mobile-phone-png-hd.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      category: 'electronic',
    },
    {
      id: 6,
      name: 'Samsung DoubleDoor Refrigerator',
      href: '/',
      imageSrc: 'https://5.imimg.com/data5/RF/LK/WK/SELLER-94655483/double-door-refrigerator.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      category: 'electronic',
    },
    {
      id: 7,
      name: 'Ipad',
      href: '/',
      imageSrc: 'https://m.media-amazon.com/images/I/61goypdjAYL._AC_UF1000,1000_QL80_.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      category: 'electronic',
    },
    {
      id: 8,
      name: 'Mackbook Pro M1',
      href: '/',
      imageSrc: 'https://ismart.co.in/wp-content/uploads/2021/08/Macbook-Pro.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      category: 'electronic',
    },
    // More products...
  ]


  const uniqueCategory = ["All Products",...new Set(products.map(element => (element.category)))];
  console.log(uniqueCategory);




  
  
  
  export default function Category() {
    const [product,setProduct] = useState(products);
    const [addcart,setAddCart] = useState(0)
    
    const filterproduct =(category) =>{
       const filtercategory =  products.filter(element=>element.category === category);
       setProduct(filtercategory)
       if(category === "All Products"){
        setProduct(products)
       }
      
    }
    
   
   
    return (
      <section>
        <Navbar product={product} filterproduct={filterproduct} uniqueCategory={uniqueCategory}/>
        <div className="bg-white">
       
         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Customers Also Buy These Products</h3>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              <Button product={product}/>
              </div>
            ))}
          </div>
        </div>
  
       
            </div>
      </section>
      
    )
  }
  