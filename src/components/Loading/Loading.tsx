import React from "react";
import Loader from "react-loader-spinner";
import "./Loading.scss";
import { increment } from "../store/actions/counter";
import { useDispatch } from "react-redux";

const Loading: React.FC = props => {
  const dispatch = useDispatch();

  return (
    <div className={"loading-holder"} onClick={() => dispatch(increment())}>
      <Loader type="Circles" color="yellow" height={100} width={100} />
    </div>
  );
};

export default Loading;
