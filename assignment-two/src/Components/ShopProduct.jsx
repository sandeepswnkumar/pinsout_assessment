import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { useSelector} from "react-redux";

const ShopProduct = () => {


    const filter = useSelector((state) => state);
    const [products, setProducts] = useState([]);
    const [priceRange, setPriceRange] = useState(["AllPrice"]);
    const [category, setCategory] = useState("AllCategory")

    const handleAPI = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
    };
    useEffect(() => {
        handleAPI();
    }, []);


    useEffect(() => {
        if (filter.category.price !== undefined) {
            if (filter.category.price === "AllPrice") {
                if (priceRange.length === 2) {
                    priceRange.shift();
                    priceRange.shift();
                    priceRange.push("AllPrice");
                    setPriceRange([...priceRange]);
                }

            } else {
                let arr = filter.category.price.split("-");
                setPriceRange(arr);
                setCategory(filter.category.category)
            }
        }
        
    }, [filter]);


    const renderProduct = products.map((product) => {

        if ((priceRange[0] === "AllPrice" || priceRange[0] === "") && (category === "" || category === "AllCategory")) {
            return (
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    imgs={product.image}
                    rating={Math.floor(product.rating.rate)}
                    ratingCount={product.rating.count}
                />
            )
        }
        
        if (priceRange[0] === "AllPrice" || priceRange[0] === "") {
            if (category === product.category) {
                return (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        imgs={product.image}
                        rating={Math.floor(product.rating.rate)}
                        ratingCount={product.rating.count}
                    />
                )
            } 
        }
        
        if((product.price >= Number(priceRange[0]) && product.price <= Number(priceRange[1]))  && (category === "" || category === "AllCategory")) {
            return (
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    imgs={product.image}
                    rating={Math.floor(product.rating.rate)}
                    ratingCount={product.rating.count}
                />
            )
        }
        
        if(product.price >= Number(priceRange[0]) && product.price <= Number(priceRange[1])){
            if (category === product.category) {
                return (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        imgs={product.image}
                        rating={Math.floor(product.rating.rate)}
                        ratingCount={product.rating.count}
                    />
                )
            } 
        }
    })


    return (
        <div className="col-lg-9 col-md-8">
            <div className="row pb-3">

                {renderProduct}

            </div>
        </div>
    );
};

export default ShopProduct;
