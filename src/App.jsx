import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DishService from "./service/dish.service";
import CategoryService from "./service/category.service";
import RestaurantService from "./service/restauran.service";
import Sign from "./pages/sign";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.restaurant);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      RestaurantService.getRestaurant(dispatch, localStorage.getItem("userId"));
    }
    DishService.getDish(dispatch);
    CategoryService.getCategory(dispatch);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/table/:id" element={<Sign />} />
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="waiters" element={<Waiters />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
