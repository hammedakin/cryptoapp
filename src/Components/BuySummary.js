import React, { useState } from 'react';
import visa from "../asset/visa.svg";
import apple from "../asset/apple.svg";

const BuySummary = () => {

    const [summary, setsummary] = useState(false);
    function hide() {
        setsummary(!summary)
    }
    return (
        <>

            <div className="col-md-12 mt-4">
                <label className="">
                    <small>Select Payment Method</small>
                </label>
                <div className="row align-items-center payment px-3">
                    <div className="col-md-12">
                        <p className="offer px-3 light-text small">Best Offer </p>
                    </div>
                    <div className="col me-1 border p-3 first active">
                        <img src={visa} width="" className="me-2 " />
                        Debit Card
                    </div>
                    <div className="col ms-1 border p-3 first">
                        <img src={apple} width="" className="me-2 " />
                        Apple Pay
                    </div>
                </div>
            </div>

            <div className="col-md-12 mt-4">

                <div className="summary">
                    <div className="d-flex justify-content-between align-content-center" onClick={()=> hide()}>
                        <h6 className="">
                            Summary
                        </h6>
                        <i class={`bx bx-chevron-down dark-text h4 m-0 p-0`} />

                    </div>
                    <div className="mt-3">
                        {summary && <>
                        
                        <div className="d-flex mb-1 justify-content-between align-content-center">
                            <p className=" m-0">
                                Exchange Rate
                            </p>
                            <small className="grey-text">
                                1 ETH = 51,675 NGN
                            </small>

                        </div>
                        <div className="d-flex mb-1 justify-content-between align-content-center">
                            <p className=" m-0">
                                Processing Fee
                            </p>
                            <small className="grey-text">
                                23,675NGN
                            </small>

                        </div>
                        <div className="d-flex mb-1 justify-content-between align-content-center">
                            <p className=" m-0">
                                Payment Method
                            </p>
                            <small className="grey-text">

                            </small>

                        </div>
                        <div className="d-flex mb-1 justify-content-between align-content-center">
                            <p className=" m-0">
                                Processing Time
                            </p>
                            <small className="grey-text">
                                10-13 minutes
                            </small>

                        </div>
                        </>}
                  

                    </div>
                </div>

            </div>

        </>
    );
}

export default BuySummary;