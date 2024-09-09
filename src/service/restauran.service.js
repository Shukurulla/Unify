import {
  getRestaurantFailure,
  getRestaurantStart,
  getRestaurantSuccess,
} from "../slice/restauran.slice";
import axios from "./api";
const id = "66dec1fc25c5865fd12bbb0e";
const RestaurantService = {
  async getRestaurant(dispatch) {
    dispatch(getRestaurantStart());
    try {
      const { data } = await axios.get(`/restaurants/${id}`);
      dispatch(getRestaurantSuccess(data.restaurant));
    } catch (error) {
      console.log(error);
      dispatch(getRestaurantFailure());
    }
  },
};

export default RestaurantService;
