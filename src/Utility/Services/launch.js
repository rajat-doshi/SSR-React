import { get } from "./httpInterceptor";

export const getAllLaunchList = (year = "", landing = "", launch = "") => {
  let url = `/v3/launches?limit=100`;
  if (year) {
    url = url + `&launch_year=${year}`;
  }
  if (landing) {
    url = url + `&land_success=${landing}`;
  }
  if (launch) {
    url = url + `&launch_success=${launch}`;
  }
  return get(url).then((res) => {
    return res;
  });
};
