import { API_URL } from "../../config";
import axios from "axios";

export const isAuthorizated = async () => {
  try {
    return await axios.get(`${API_URL}/auth`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (err) {
    console.log(err);
    localStorage.removeItem("token");
  }
};

export const userLogin = async (login, password) => {
  return await axios
    .post(
      `${API_URL}/login`,
      { login, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .catch((error) => console.log(error));
};
