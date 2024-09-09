import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantService from "../service/restauran.service";
import { useDispatch } from "react-redux";
import loadingPng from "../../public/loading.png";
import axios from "../service/api";
import { getTableSuccess } from "../slice/table.slice";

const Sign = () => {
  const { id } = useParams();
  const tableId = id.split(".")[0];
  const userId = id.split(".")[1];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restaurantHandler = async () => {
    const data = await RestaurantService.getRestaurant(dispatch, userId);

    if (data) {
      const { data } = await axios.get(`/table/table/${tableId}`);
      console.log(data);

      dispatch(getTableSuccess(data));
      if (data) {
        localStorage.setItem("tableId", data._id);
        navigate("/");
        // window.location.reload();
      }
    }
  };

  useEffect(() => {
    restaurantHandler();
  }, []);
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <img src={loadingPng} alt="" />
    </div>
  );
};

export default Sign;
