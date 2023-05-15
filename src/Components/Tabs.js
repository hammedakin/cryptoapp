


const Tabs = () => {

    let navLink = [
        { to: "#sell", title: "Sell", idTab: "sell" },
        { to: "#convert", title: "convert", idTab: "convert" },
    ];


    return (
        <>

            <div className="nav-tab">

                <ul class="nav nav-tabs text-center" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home" data-toggle="tab" href="#buy" role="tab" aria-controls="home" aria-selected="true"
                        >
                            Buy
                        </a>
                    </li>

                    {navLink.map(({ to, title, idTab }, i) => {
                        return (
                            <li class="nav-item" key={i}>
                                <a class="nav-link" id="home-tab" data-toggle="tab" href={to} role="tab" aria-controls="home" aria-selected="true"
                                >
                                    {title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>

           



        </>
    );
}

export default Tabs;