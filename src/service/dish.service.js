import {
  getDishFailure,
  getDishStart,
  getDishSuccess,
} from "../slice/dish.slice";
import axios from "./api";

const id = "66dec1fc25c5865fd12bbb0e";

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
