import {
  getRestaurantFailure,
  getRestaurantStart,
  getRestaurantSuccess,
} from "../slice/restauran.slice";
import axios from "./api";
const RestaurantService = {
  async getRestaurant(dispatch, id) {
    dispatch(getRestaurantStart());
    try {
      const { data } = await axios.get(`/restaurants/${id}`);

      dispatch(getRestaurantSuccess(data.restaurant));
      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.restaurant._id);
      }
      return data;
    } catch (error) {
      console.log(error);
      dispatch(getRestaurantFailure());
    }
  },
};

export default RestaurantService;
