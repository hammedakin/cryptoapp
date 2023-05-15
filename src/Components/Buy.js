import BuySummary from './BuySummary';
import eth from "../asset/eth.svg";
import nig from "../asset/nig.svg";



const Buy = () => {
    return (
        <>
            <div className="buy my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="light-bg first">

                            <h4 className="">
                                Buy Crypto
                            </h4>


                            <div className="mt-4">
                                <form enctype="multipart/form-data" autocomplete="false">
                                    <div className="row justify-content-center text-left">
                                        <div className="col-md-12 ">
                                            <label className="mb-0">
                                                <small> You spend: </small>
                                            </label>
                                            <div className="d-flex align-items-center second">
                                                <input
                                                    type="number"
                                                    className=" input-style my-1 buy-form "
                                                    name="amount"
                                                    placeholder="5.00 - 1000.00"
                                                    // onChange={handleChange}
                                                    required
                                                    autoComplete="off"
                                                // disabled={disabled ? true : false}

                                                />
                                                <span className="mx-3 d-flex align-items-center ">
                                                    <img src={nig} width="" className="me-2 " />
                                                    NGN
                                                    <i class={`bx bx-chevron-down dark-text px-2`} />
                                                </span>
                                            </div>

                                        </div>

                                        <div className="col-md-12 mt-4">
                                            <label className="mb-0">
                                                <small> You recieve: </small>
                                            </label>
                                            <div className="d-flex align-items-center second">
                                                <input
                                                    type="number"
                                                    className=" input-style my-1 buy-form"
                                                    name="token"
                                                    placeholder="5.00 - 1000.00"
                                                    // onChange={(e) => settoken(e.target.value)}
                                                    // value={price}
                                                    required
                                                    // disabled={disabled ? true : false}
                                                    autoComplete="off"
                                                />
                                                <span className="mx-3 d-flex align-items-center">
                                                    <img src={eth} width="" className="me-2 ms-1" />
                                                    ETH
                                                    <i class={`bx bx-chevron-down dark-text px-2`} />
                                                </span>
                                            </div>
                                        </div>


                                        <BuySummary />
                                        <div class="col-md-12 text-right">
                                            <div class=" mb-4 mt-5 text-right">

                                                <button
                                                    type="button"
                                                    class="btn btn-sec w-100 pry-bold light-text btn-lg br-0 shadow-none"
                                                    action="submit"
                                                // onClick={(e) => payFn()}
                                                >
                                                    <h5 className='font-weight-light'>

                                                    Proceed
                                                    </h5>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Buy;


