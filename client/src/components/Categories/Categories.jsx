import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://m.media-amazon.com/images/I/61zC5SUVqRL._AC_UL1151_.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
              {/* "https://www.amazon.com/dp/B0B2RM48RY/?coliid=I368CCDSHE1UM1&colid=13Y5PPDM7R4HT&psc=0&ref_=lv_ov_lig_dp_it_im" */}
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://m.media-amazon.com/images/I/61LdoxRUZhL._AC_UL1500_.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Women
              {/* "https://www.amazon.com/dp/B09PYPBSCN/?coliid=I28KGAQLYNFHUP&colid=13Y5PPDM7R4HT&psc=1&ref_=lv_ov_lig_dp_it_im" */}
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://m.media-amazon.com/images/I/71f6GbcbXSL._AC_UL1500_.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              New Season
              {/* "https://www.amazon.com/dp/B09B7BFRXV/?coliid=I27JKP83P3X45X&colid=13Y5PPDM7R4HT&psc=1&ref_=lv_ov_lig_dp_it_im" */}
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/WIN23/BROWSE/L1M/DT/L1M_DT_3UP_TRENDSTORY_2._CB1198675309_.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Men
                  {/* "https://www.amazon.com/dp/B09TFGHX66/?coliid=I1398FZP18ZU2T&colid=13Y5PPDM7R4HT&psc=0&ref_=lv_ov_lig_dp_it_im" */}
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://m.media-amazon.com/images/I/61PNE9I8+8L._AC_UL1500_.jpg"
                alt=""
              />
              {/* "https://www.amazon.com/dp/B08P6MTQNN/?coliid=IA6GETP41HUU8&colid=13Y5PPDM7R4HT&ref_=lv_ov_lig_dp_it_im&th=1&psc=1" */}
              <button>
                <Link className="link" to="/products/1">
                  Accessories
                  {/* "https://www.amazon.com/dp/B09SXT8H56/?coliid=I231LMDUZD0EPP&colid=13Y5PPDM7R4HT&psc=0&ref_=lv_ov_lig_dp_it_im" */}
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://m.media-amazon.com/images/I/61VvheYe7DL._AC_.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Shoes
              {/* "https://www.amazon.com/dp/B09B7BFRXV/?coliid=I27JKP83P3X45X&colid=13Y5PPDM7R4HT&psc=1&ref_=lv_ov_lig_dp_it_im" */}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
