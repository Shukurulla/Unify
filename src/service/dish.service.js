import {
  getDishFailure,
  getDishStart,
  getDishSuccess,
} from "../slice/dish.slice";
import axios from "./api";

const id = localStorage.getItem("userId");

const DishService = {
  async getDish(dispatch) {
    dispatch(getDishStart());
    try {
      const { data } = await axios.get(`/dishes/${id}`);
      dispatch(getDishSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getDishFailure());
    }
  },
};

export default DishService;
