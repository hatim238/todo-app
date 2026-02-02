import Product from "./Product";

const Productlists = () => {
    const products = [
        {name: "Laptop", price: "$100", available: true},
        {name: "Car", price: "$100", available: false},
        {name: "Mobile", price: "$100", available: true},
        {name: "Bag", price: "$100", available: true},
        {name: "SHoes", price: "$100", available: true},  
    ];

    return (
        <>
        <h1>My available Product</h1> 

        {products.map((prod) =>(
            <Product
            name={prod.name}
            price={prod.price}
            available={prod.available}
            />
        ))}
        </>
    );
};

export default Productlists;