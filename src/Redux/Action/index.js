import { get, post } from "../../Utility/Services/httpInterceptor";

import store from "../index";
export const getItems = () => {
  return (dispatch) =>
    get(`/items`).then((res) => {
      dispatch({ type: "item-list", payload: { items: res.data } });
      console.log("getItems", res);
      return res;
    });
};

export const getItemById = (id) => {
  return (dispatch) => {
    const selectedItem = store
      .getState()
      .itemsList.items.filter((res) => res.id == id);
    console.log("selectedItem", selectedItem);
    dispatch({
      type: "item-select",
      payload: { itemselectedItem: selectedItem[0] },
    });
  };
};

export const postItemUpdateById = (obj) => {
  return (dispatch) => {
    const itemList = [];
    store.getState().itemsList.items.map((res, index) => {
      if (res.id === obj.id) {
        itemList[index]=obj
      } else {
        itemList[index]=res;
      }
    });
  console.log("Object Data",itemList)
    dispatch({
      type: "item-list",
      payload: { items: itemList },
    });
  
  };
};

export const postItemDeleteById = (id) => {
    return (dispatch) => {
      const itemList = [];
      store.getState().itemsList.items.map((res, index) => {
        if (res.id !== id) {
          itemList.push(res)
        }
      });
      dispatch({
        type: "item-list",
        payload: { items: itemList },
      });
    
    };
  };
