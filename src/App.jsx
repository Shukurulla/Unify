import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DishService from "./service/dish.service";
import CategoryService from "./service/category.service";
import RestaurantService from "./service/restauran.service";
import Sign from "./pages/sign";
import axios from "./service/api";

function App() {
  const dispatch = useDispatch();

  const fetchTable = async (tableId) => {
    const { data } = await axios.get(`/table/table/${tableId}`);

    dispatch(getTableSuccess(data));
    if (data) {
      localStorage.setItem("tableId", data._id);
      navigate("/");
      // window.location.reload();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      RestaurantService.getRestaurant(dispatch, localStorage.getItem("userId"));
    }
    if (localStorage.getItem("tableId")) {
      fetchTable(localStorage.getItem("tableId"));
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
