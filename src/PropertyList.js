import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems,postItemDeleteById } from "./Redux/Action/index";
import { Link } from "react-router-dom";
export const PropertyList = (props) => {
  useEffect(() => {
    if (props.itemsList.items.length == 0) props.getItems();
  }, []);
  return (
    <>
      {" "}
      <div className="container image-item-block">
        {props.itemsList.items.map((res, index) => {
          return (
            <>
              <div class="item-contain">
                <div class="image-block">
                  <img src={res.imgURL} />
                  <div class="detail">
                    <h3>{res.title}</h3>
                    <p>{res.desc}</p>
                  </div>
                </div>
                <div class="action-buttons">
                  <Link to={`/edit/${res.id}`} className="text-dark btn">
                    <button className="btn ">
                      <i className="fa fa-pencil" /> Edit
                    </button>
                  </Link>
                  <button className="btn ml-4 editTextbox" onClick={()=>{
                      props.postItemDeleteById(res.id)
                  }}>
                    <i className="fa fa-trash" /> Delete
                  </button>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};
export default connect((state) => state, { getItems,postItemDeleteById })(PropertyList);
