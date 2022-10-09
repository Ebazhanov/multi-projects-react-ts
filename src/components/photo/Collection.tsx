import React from "react";
import "../../pages/Photos/Photos.scss";

interface CollectionProps {
  name: string;
  images: any;
}

const Collection = ({ name, images }: CollectionProps) => {
  return (
    <div className="collection">
      <img className="collection__big" src={images[0]} alt="Item" />
      <div className="collection__bottom">
        <img className="collection__mini" src={images[1]} alt="Item" />
        <img className="collection__mini" src={images[2]} alt="Item" />
        <img className="collection__mini" src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
};

export default Collection;
