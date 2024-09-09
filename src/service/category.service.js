import {
  getCategoryFailure,
  getCategoryStart,
  getCategorySuccess,
} from "../slice/category.slice";
import axios from "./api";

const id = "66dec1fc25c5865fd12bbb0e";

const CategoryService = {
  async getCategory(dispatch) {
    dispatch(getCategoryStart());
    try {
      const { data } = await axios.get(
        `/category/all/66dec1fc25c5865fd12bbb0e`
      );
      console.log(data);

      dispatch(getCategorySuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getCategoryFailure());
    }
  },
};

export default CategoryService;
