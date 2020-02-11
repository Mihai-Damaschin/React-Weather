import React from "react";
import Loader from "react-loader-spinner";
import "./Loading.scss";

const Loading: React.FC = () => {
  return (
    <div className={"loading-holder"}>
      <Loader type="Circles" color="yellow" height={100} width={100} />
    </div>
  );
};

export default Loading;
