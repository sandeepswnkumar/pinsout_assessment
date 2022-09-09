import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const ShopProduct = () => {
    const filter = useSelector((state) => state);
    const [products, setProducts] = useState([]);
    const [priceRange, setPriceRange] = useState(["0", "1000"]);
    const [filtered, setFiltered] = useState([]);

    const handleAPI = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
    };

    useEffect(() => {
        if (filter.category.price !== undefined) {
            let arr = filter.category.price.split("-");

            setPriceRange(arr);
            setProducts([...products])
        }

        setFiltered(products)

        products.forEach(element => {
            if (element.price >= priceRange[0] && element.price <= priceRange[1]) {
                filtered.splice(0, filtered.length);
                setFiltered([...filtered])
                console.log("filtered")
                console.log(filtered)

            }
        })



    }, []);







    useEffect(() => {
        handleAPI();
    }, [priceRange]);


    return (
        <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
                <div className="col-12 pb-1">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="ml-2">
                            <div className="btn-group dropdown">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-light dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sorting
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        Latest
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Popularity
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Best Rating
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    products.map((product, index) => (

                        <Product
                            display={
                                (product.price >= Number(priceRange[0]) && product.price <= Number(priceRange[1])
                                    ? ""
                                    : "none"
                                )
                            }
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            imgs={product.image}
                            rating={Math.floor(product.rating.rate)}
                            ratingCount={product.rating.count}
                        />


                        
                    ))
                }

            </div>
        </div>
    );
};

export default ShopProduct;
