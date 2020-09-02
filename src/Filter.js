import React from "react";
const LaunchButton = (props) => {
  const { state, handleChange } = props;
  let buttonList = [];
  for (let i = 2006; i <= 2020; i++) {
    buttonList.push(
      <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6 ">
        <button
          className={`btn btn-secondary mt-4 ${state.year==i&&"active"}`}
          onClick={() => {
            handleChange("year", i);
          }}
          disabled={state.loading}
        >
          {i}
        </button>
      </div>
    );
  }
  return buttonList;
};
const Filter = (props) => {
  const { handleChange, state } = props;
  return (
    <>
      <div class="block-item"><span className="title">Launch Year</span>
      <div className="row">
      <LaunchButton state={state} handleChange={handleChange} />
      </div>
      <hr />
      <span className="title">Success launch</span>
      
      <div className="row">
      <div className="col-lg-6">
      {" "}
      <button
     className={`btn btn-secondary mt-4 ${state.launch_success=="true"&&"active"}`}
      onClick={() => {
      handleChange("launch_success", "true");
      }}
      disabled={state.loading}
      >
      True
      </button>{" "}
      </div>
      <div className="col-lg-6">
      <button
       className={`btn btn-secondary mt-4 ${state.launch_success=="false"&&"active"}`}
      onClick={() => {
      handleChange("launch_success", "false");
      }}
      disabled={state.loading}
      >
      False
      </button>
      </div>
      </div>
      
      <span className="title">Successful landing</span>
      <div className="row">
      <div className="col-lg-6">
      {" "}
      <button
      className={`btn btn-secondary mt-4 ${state.land_success=="true"&&"active"}`}
      onClick={() => {
      handleChange("land_success", "true");
      }}
      disabled={state.loading}
      >
      True
      </button>{" "}
      </div>
      <div className="col-lg-6">
      <button
      className={`btn btn-secondary mt-4 ${state.land_success=="false"&&"active"}`}
      onClick={() => {
      handleChange("land_success", "false");
      }}
      disabled={state.loading}
      >
      False
      </button>
      </div>
      </div></div>
    </>
  );
};
export default Filter;
