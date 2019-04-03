import axios from "axios";
import { apiBaseURL } from "../Utils/Constants";
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from "./types";

export const FetchCoinData = () => {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axios({
      method: "get",
      url: `${apiBaseURL}/v1/cryptocurrency/listings/latest?limit=100`,
      headers: {
        "X-CMC_PRO_API_KEY": "YOUR API KEY"
      }
    })
      .then(res => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
      });
  };
};
