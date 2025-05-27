import React, { useContext } from "react";
import "../CSS/ShopCategory.css";
import { ShopContext } from "./../Components/Context/ShopContext";
import dropdown_icon from "../assets/images/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log("ShopCategory all_product:", all_product); // Debug log
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" height="20px" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((items, i) => {
          if (props.category === items.category) {
            console.log("Rendering item:", items); // Debug log
            return (
              <Item
                key={i}
                id={items.id}
                name={items.name}
                image={items.image}
                new_price={items.new_price}
                old_price={items.old_price}
              />
            );
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
