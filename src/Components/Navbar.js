import { Link } from "react-router-dom";
import logo from "../asset/setapay.svg";
import flag from "../asset/flags.svg";
import akin from "../asset/akin.jpg";
const Navbar = () => {

  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src={logo}
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Exchage</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Invest</a>
              </li>

              <li class="nav-item">
                <Link class="nav-link active1" to="/">Buy Crypto</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Trade</a>
              </li>
            </ul>
          <div class="d-flex align-items-center">
            <div class="dropdown">
              <div className="align-items-center">
              </div>
              <a
                class="align-items-center border px-2 text-reset me-3 dropdown-toggle hidden-arrow py-1"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={flag} width="" className="me-1" />
               
                  ENG
                <i class="bx bx-chevron-down h6 pry-bold-text "></i>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end transparent mx-auto shadow-none w-50"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="text-center">
                  <a
                    class="text-reset me-3 border light-bg px-3 dropdown-toggle hidden-arrow "
                  >
                    <img src={flag} width="13%" className="me-1" />
                    ENG
                  </a>
                  <a
                    class="text-reset me-3 border light-bg px-3 dropdown-toggle hidden-arrow "
                  >
                    <img src={flag} width="13%" className="me-1" />
                    ENG
                  </a>
                  <a
                    class="text-reset me-3 border light-bg px-3 dropdown-toggle hidden-arrow "
                  >
                    <img src={flag} width="13%" className="me-1" />
                    ENG
                  </a>
                </li>
              </ul>
            </div>
            <a class="text-reset me-3" href="#">
              <i class="bx bx-sun h5 pry-bold-text pt-2"></i>
            </a>
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
              >
                <img
                  src={akin}
                  class="rounded-circle"
                  height="30"
                  loading="lazy"
                />
              </a>

            </div>
          </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
