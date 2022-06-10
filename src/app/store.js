import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../features/city/citySlice";
import weatherReducer from "../features/weather/weatherSlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    weather: weatherReducer,
  },
});
