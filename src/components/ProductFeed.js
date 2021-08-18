import Products from "./Products"
// import Products2 from "./Products2"

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-28 lg:-mt-36 mx-auto">
            {products
                .slice(0, 4)
                .map(({ id, title, price, description, category, image}) => (
                    <Products
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image} 
                    />
            ))}

            <img className="md:col-span-full mx-auto"
                 src="https://links.papareact.com/dyz"
                 alt=""   
            />
            
            <div className="md:col-span-2 flex flex-stretch">
                {products
                    .slice(4, 5)
                    .map(({ id, title, price, description, category, image}) => (
                        <Products
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image} 
                        />
                ))}
            </div>

            {products
                .slice(5, products.length)
                .map(({ id, title, price, description, category, image}) => (
                    <Products
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image} 
                    />
            ))}

        </div>
    )
}

export default ProductFeed
