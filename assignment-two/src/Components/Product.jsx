import React, { useEffect, useState } from 'react'

const Product = ({ display,id, title, price, imgs, rating, ratingCount }) => {

    const [ratingStar, setRatingStar] = useState([]);


    useEffect(() => {
        for (let i = 0; i < rating; i++) {
            ratingStar.push(<small className="fa fa-star text-primary mr-1"></small>)
            setRatingStar([...ratingStar])
        }
    }, [])

    return (
        <div className="col-lg-4 col-md-6 col-sm-6 pb-1 my-2" style={{ height: "450px", display:display }}>
            <div className="product-item bg-light mb-4 pt-3" style={{ height: "100%" }}>
                <div className="product-img position-relative d-flex justify-content-center overflow-hidden" style={{ height: "60%" }}>
                    <img className="img-fluid" src={imgs} width="200" height="400" />
                </div>
                <div className="text-center py-4">
                    <p className="">{title}</p>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5 className=''>${price}</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                        {ratingStar}
                        <small>({ratingCount})</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product