import React from 'react'
import { useSelector } from "react-redux";

const FinalData = () => {

    const data = useSelector((state) => state.details)

    return (
        <div className="finalContent">
            <h2 className="heading" style={{ color: "green" }}>Your Payment was Successful</h2>
            <div className="showData">
                <div className="finalDataHead">
                    <div className="formInput">
                        <label htmlFor="">First Name</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Last Name</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Mobile No</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Address 1</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Address 2</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">City</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">State</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Country</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Pin Code</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">Card No</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">CVV</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">MM</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">YYYY</label>
                    </div>
                </div>
                <div className="finalDataColon">
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">:</label>
                    </div>
                </div>
                <div className="finalDataContent">
                    <div className="formInput">
                        <label htmlFor="">{data.fname}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.lname}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.email}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.mobile}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.address1}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.address2}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.city}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.state}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.country}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.pinCode}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.cardNo}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.CVV}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.MM}</label>
                    </div>
                    <div className="formInput">
                        <label htmlFor="">{data.YYYY}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalData