import Image from "next/image"
import { useState } from "react"
import { StarIcon } from "@heroicons/react/solid"
import Currency from "react-currency-formatter"

const MAX_RATING = 5
const MIN_RATING = 1

function Products({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

    const [hasPrime] = useState(Math.random() < 0.5)

    return (
        <div key={id} className="flex flex-col text-center">
            <p>{category}</p>
            <Image src={image} width={200} height={200} objectFit="contain" />
            <h4>{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className="h-5 text-yellow-300" />
                ))}
            </div>
            <p>{description}</p>

            <div>
                <Currency quantity={price} currency="GBP" />
            </div>

            {hasPrime && (
                <div>
                    <img src="https://links.papareact.com/fdw" alt="" />
                    <p className="font-bold">Free Next-Day Delivery</p>
                </div>
            )}

            <button className="bg-yellow-400 rounded-lg p-2">Add to Basket</button>
        </div>
    )
}

export default Products
