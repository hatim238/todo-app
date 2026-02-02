const Product = ({name, price, available})=>{
    return (
        <div className="border border-red-600">
            <div className="boarder border-yellow-100 mb-15"></div>
            <p className="text-red-500"> Product Name:</p>
            <p>Price: ${price}</p>
            <p>Available: {available ? "Yes":"No"}</p>
            
        </div>
    
    );
};
export default Product;