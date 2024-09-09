import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import DishService from "./service/dish.service";
import CategoryService from "./service/category.service";
import RestaurantService from "./service/restauran.service";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    RestaurantService.getRestaurant(dispatch);
    DishService.getDish(dispatch);
    CategoryService.getCategory(dispatch);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="waiters" element={<Waiters />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
