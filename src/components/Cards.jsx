import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);

  const peticion = async () => {
    const res = await fetch(
      "https://api.unsplash.com/photos/?client_id=b5N0C9ewbVx9HtK_nJLcArHy8w7KmB2Ljqez_qbcrmA"
    );

    const data = await res.json();

    setImages(data);
  };

  useEffect(() => {
    peticion();
  }, []);

  return (
    <>
      {images.map((img) => {
        return <Card key={img.id} img={img.urls.regular} />;
      })}
    </>
  );
};

export default Cards;
