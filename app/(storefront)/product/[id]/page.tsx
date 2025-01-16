import { addItemToCart } from "@/app/action";
import FeaturedProducts from "@/components/storefront/FeaturedProducts";
import ProductImage from "@/components/storefront/ProductImage";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import formatNumberWithCommas from "@/utils";
import { Star } from "lucide-react";
const data = [
  {
    id: 1,
    title: "This is product title",
    price: 32445,
    TotalReviews: 12,
    Totaleratings: 4,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum."
      },
      {
        id: 2,
        name: "John Doe",
        rating: 3,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum."
      }
    ],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, reprehenderit iusto! Hic veritatis, excepturi labore reiciendis id, quam minima quibusdam, doloribus accusantium nam consequuntur velit consequatur eligendi est vel inventore!",
    src: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1465408953385-7c4627c29435?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1511511450040-677116ff389e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        src: `https://img.freepik.com/free-photo/stylish-woman-leather-coat-black-hat-demonstrate-winter-fashion-trends-white_273443-4937.jpg?t=st=1735134648~exp=1735138248~hmac=34731bc7922ae332f8bb6102265e97e629b979a1c8e53039acfd7f01fe61c64d&w=996`
      }
    ]
  },
];
export default async function SingleProductPage({ params }: { params: { id: string } }) {
  const addItemToShoppingCart = addItemToCart.bind(null, data[0].id.toString())
  return (
    <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      {
        data.map((item, index) => (
          <div
            key={index}
            className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 mt-5">
            <ProductImage img={item.src} />
            <div className="mt-10 lg:mt-0">
              <h1 className="text-2xl font-medium">
                {item.title}
              </h1>
              <div className="my-5 font-medium flex justify-between items-center">
                <span className="text-3xl font-semibold">{`₹${formatNumberWithCommas(item.price)}`}</span>
                <div className="flex justify-center items-center gap-2">
                  <Star size={15} fill="#facc15" />
                  Reviews {`(${item.TotalReviews})`}
                </div>
              </div>
              <div className="flex justify-between items-center gap-3">
                <div className="flex justify-center flex-col w-full items-center gap-4">
                  <Button className="w-full">
                    Buy Now
                  </Button>
                  <form action={addItemToShoppingCart} className="w-full">
                    <Button
                      size="lg" variant="outline" className="w-full">
                      Add to Cart
                    </Button>
                  </form>
                </div>
              </div>
              <h1 className="text-2xl font-medium mt-5">Product Description</h1>
              <p className="">
                {item.desc}
              </p>
              <div className="my-20" id="reviews">
                <h1 className="text-2xl font-medium">Reviews & Ratings</h1>
                {
                  item.reviews?.map((review, idx) => (
                    <div key={idx} className="flex justify-center items-start mt-5 flex-col gap-3 w-full">
                      <div className="flex justify-between items-center gap-3">
                        <div className="flex justify-center items-center gap-2">
                          <Avatar>
                            <AvatarFallback>{review.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex justify-between items-center">
                            <h1>
                              {review.name}
                            </h1>
                          </div>
                          <div className=" flex justify-center items-center gap-2">
                            <Star size={15} fill="#facc15" />
                            <p>
                              {review.rating}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p>
                          {review.review}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
      <div>
        <FeaturedProducts />
      </div>
    </section >

  )
}
