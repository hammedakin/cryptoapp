import React, { useState, useEffect } from 'react';
import Buy from '../Components/Buy';
import Tabs from '../Components/Tabs';
import PageLoader from "../Components/PageLoader";
import Navbar from "../Components/Navbar";


const Home = () => {
    const [ploading, setploading] = useState(false);

    useEffect(() => {
        setploading(true);
        setTimeout(() => {
            setploading(false);
        }, 3500);
    }, []);


    return (
        <>
            <Navbar />

            {ploading ? (
                <>
                    <PageLoader loading={ploading} />
                </>
            ) : (
                <>
            <main className="home">
                <div className="container">

                   <Tabs />

                    <div class="tab-content" id="myTabContent">
                        <div
                            class="tab-pane fade show active"
                            id="buy"
                            role="tabpanel"
                            aria-labelledby="buy-tab"
                        >
                            <Buy />
                        </div>
                        <div
                            class="tab-pane fade"
                            id="sell"
                            role="tabpanel"
                            aria-labelledby="sell"
                        >
                            {/* <StoreProfile /> */}
                        </div>
                        <div
                            class="tab-pane fade"
                            id="convert"
                            role="tabpanel"
                            aria-labelledby="convert"
                        >
                            {/* <Allconverts /> */}
                        </div>

                    </div>

                </div>
            </main>
                </>
            )}

        </>

    );
}

export default Home;