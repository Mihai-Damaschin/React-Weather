import React from "react";
import Loader from "react-loader-spinner";
import "./Loading.scss";

interface WasLoadedInterface {
  hide: string;
}

const Loading: React.FC<WasLoadedInterface> = props => {
  return (
    <div className={"loading-holder " + props.hide}>
      <Loader type="Circles" color="yellow" height={100} width={100} />
    </div>
  );
};

export default Loading;
