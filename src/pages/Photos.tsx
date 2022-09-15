import Collection from "../components/photo/Collection";
import "./Photos.scss";
import { ChangeEvent, useEffect, useState } from "react";

const categories = [
  { name: "All categories" },
  { name: "Sea" },
  { name: "Mountains" },
  { name: "Architecture" },
  { name: "Cities" },
];

interface CollectionProps {
  name: string;
  photos: [string];
}

function Photos() {
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch(
      `https://6322c16ca624bced307dea7f.mockapi.io/photos-collection?${
        categoryId ? `category=${categoryId}` : ""
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Failed fetch info");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const onClickSetCategoryId = (index: number) => {
    setCategoryId(index);
  };

  return (
    <div className="photos-app">
      <h1>Collection of my photos</h1>
      <div className="top">
        <ul className="tags">
          {categories.map((obj, index) => (
            <li
              onClick={() => onClickSetCategoryId(index)}
              className={categoryId === index ? "active" : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          className="search-input"
          placeholder="Search by name"
          onChange={onChangeSearchValue}
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Loading ...</h2>
        ) : (
          collections
            .filter((obj: CollectionProps) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj: CollectionProps, index: any) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
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
