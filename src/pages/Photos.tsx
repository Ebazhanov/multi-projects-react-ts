import Collection from "../components/photo/Collection";
import "./Photos.scss";
import { ChangeEvent, useEffect, useState } from "react";

interface CollectionProps {
  name: string;
  photos: [string];
}

function Photos() {
  const [searchValue, setSearchValue] = useState("");
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("https://631f9d7058a1c0fe9f6cc4ee.mockapi.io/photo-collection")
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Failed fetch info");
      });
  }, []);

  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <div className="photos-app">
      <h1>Collection of my photos</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">All categories</li>
          <li>Mountains</li>
          <li>Sea</li>
          <li>Architecture</li>
          <li>Cities</li>
        </ul>
        <input
          className="search-input"
          placeholder="Search by name"
          onChange={onChangeSearchValue}
        />
      </div>
      <div className="content">
        {collections
          .filter((obj: CollectionProps) =>
            obj.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj: CollectionProps, index: any) => (
            <Collection key={index} name={obj.name} images={obj.photos} />
          ))}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default Photos;
