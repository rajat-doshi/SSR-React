const initialState = {
  items: [],
  selectedItem: {},
};

function Items(state = initialState, action) {
  switch (action.type) {
    case "item-list":
        console.log("Sanket",action.payload)
      return { ...state, items: action.payload.items, selectedItem: {} };
    case "item-select":
     
      return {
        ...state,
        selectedItem:
          action.payload.itemselectedItem == undefined
            ? {}
            : action.payload.itemselectedItem,
      };
    default:
      return state;
  }
}
export default Items;
