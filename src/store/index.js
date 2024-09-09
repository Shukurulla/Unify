import { configureStore } from "@reduxjs/toolkit";
import DishReducer from "../slice/dish.slice";
import CategoryReducer from "../slice/category.slice";
import RestaurantReducer from "../slice/restauran.slice";
import ProductReducer from "../slice/addProduct.slice";
const store = configureStore({
  reducer: {
    dish: DishReducer,
    category: CategoryReducer,
    product: ProductReducer,
    restaurant: RestaurantReducer,
  },
  devTools: process.env.NODE_ENV != "production",
});

export default store;
