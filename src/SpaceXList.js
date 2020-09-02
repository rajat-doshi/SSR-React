import React, { useEffect, useState } from "react";
import { getAllLaunchList } from "./Utility/Services/launch";
import Filter from "./Filter";

const SpaceLaunchList = () => {
  const [state, setState] = useState({
    launchList: [],
    launch_success: "",
    land_success: "",
    year: "",
    loading: false,
  });
  const handleChange = (name, value) => {
    state[name] = value;
    GetAllList(state.year, state.land_success, state.launch_success);
    setState({ ...state });
  };
  useEffect(() => {
    GetAllList("", "", "");
  }, []);
  const GetAllList = (year, landing, launch) => {
    state.loading = true;
    setState({ ...state });
    getAllLaunchList(year, landing, launch).then((res) => {
      if (res.error) {
        state.loading = false;
        setState({ ...state });
        return;
      }
      if (!res.error) {
        state.loading = false;
        state.launchList = res.data;
        setState({ ...state });
      }
      setState({ ...state });
    });
  };
  return (
    <>
      <div className="container-fluid">
        {state.loading && <h4>Featching data...</h4>}
        <div className="row">
          <div className="col-lg-4">
            <Filter state={state} handleChange={handleChange} />
          </div>
          <div className="col-lg-8">
            <div className="row">
              {state.launchList.length == 0 && !state.loading && (
                <h3>No Data Found</h3>
              )}
              {state.launchList.map((res) => {
                return (
                  <div className="col-lg-3 border">
                    <div>
                      {" "}
                      <img src={res.links.mission_patch_small} />{" "}
                    </div>
                    <div> {res.mission_name} </div>
                    <div>
                      {" "}
                      Mission Ids
                      <ul>
                        {" "}
                        {res.mission_id.map((idData) => {
                          return <li>{idData}</li>;
                        })}{" "}
                      </ul>
                    </div>
                    <div>Launch year :{res.launch_year}</div>
                    <div>
                      Successful Launch :{res.launch_success ? "True" : "False"}
                    </div>
                    <div>
                      Successful Landing :
                      {res.rocket.first_stage.cores.length > 0 &&
                      res.rocket.first_stage.cores[0].land_success
                        ? "True"
                        : "False"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpaceLaunchList;
