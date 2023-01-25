import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { kinopoiskAction } from "../store/KinopoiskApiUnofficial/KAu.slice";

const actions = {
  ...kinopoiskAction,
};

export const UseActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
