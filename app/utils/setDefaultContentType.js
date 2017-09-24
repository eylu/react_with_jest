import axios from "axios";

export default function setDefaultContentType() {
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.interceptors.response.use(
    response => {
      return response;
    },
    function(error) {
      if (error.response.status === 401) {
        localStorage.removeItem("jwtToken");
        delete axios.defaults.headers.common["Authorization"];
        if (window.location.pathname !== "#/login") {
          window.location.href = "#/login";
        }
      }
      return Promise.reject(error);
    }
  );
}
