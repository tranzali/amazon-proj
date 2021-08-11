import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currecny from "react-currency-formatter";

const MAX_RATING = 5
const MIN_RATING = 1

function products2({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

    const [hasPrime] = useState(Math.random() < 0.5)

    return (
        <div key={id}>
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
                <Currecny quantity={price} currency="GBP" />
            </div>

            {hasPrime && 
            <div>
                <img src="https://links.papareact.com/fdw" alt="" />
                <p className="font-bold">Free Next-Day Delivery</p>
            </div>
            }
        </div>
    )
}

export default products2
