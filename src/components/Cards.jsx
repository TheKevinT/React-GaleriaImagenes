import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");

  const peticion = useCallback(async () => {
    const key = "client_id=b5N0C9ewbVx9HtK_nJLcArHy8w7KmB2Ljqez_qbcrmA";

    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?&query=${encodeURI(
        input
      )}&${key}`;
    }

    const res = await fetch(route);

    const data = await res.json();
    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  },[input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const _handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };

  return (
    <>
      <form onSubmit={_handleSubmit}>
        <label className="form-label">
          Buscar:
          <input type="text" className="form-control" name="inputText" />
        </label>
      </form>
      <hr />
      {images.map((img) => {
        return <Card key={img.id} img={img.urls.regular} />;
      })}
    </>
  );
};

export default Cards;
