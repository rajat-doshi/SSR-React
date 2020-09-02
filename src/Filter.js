import React from "react";
const LaunchButton = (props) => {
  const { state, handleChange } = props;
  let buttonList = [];
  for (let i = 2006; i <= 2020; i++) {
    buttonList.push(
      <div className="col-lg-6">
        <button
          className="btn btn-secondary mt-4"
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
      <span>Launch Year</span>
      <div className="row">
        <LaunchButton state={state} handleChange={handleChange} />
      </div>
      <hr />
      <span>Success launch</span>

      <div className="row">
        <div className="col-lg-6">
          {" "}
          <button
            className="btn btn-primary"
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
            className="btn btn-primary"
            onClick={() => {
              handleChange("launch_success", "false");
            }}
            disabled={state.loading}
          >
            False
          </button>
        </div>
      </div>
      <hr />
      <span>Successful landing</span>
      <div className="row">
        <div className="col-lg-6">
          {" "}
          <button
            className="btn btn-primary"
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
            className="btn btn-primary"
            onClick={() => {
              handleChange("land_success", "false");
            }}
            disabled={state.loading}
          >
            False
          </button>
        </div>
      </div>
    </>
  );
};
export default Filter;
