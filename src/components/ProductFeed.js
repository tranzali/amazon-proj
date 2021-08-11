import Products from "./Products"
// import Products2 from "./Products2"

function ProductFeed({ products }) {
    return (
        <div>
            {products.map(({ id, title, price, description, category, image}) => (
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
