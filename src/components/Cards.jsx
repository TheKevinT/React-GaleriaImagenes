import React from "react";
import { UseFetchImages } from "../Hooks/UseFetchImages";
import Card from "./Card";
import Form from "./Form";
import Loading from "./Loading";

const Cards = () => {
  const [images, loading, _handleSubmit] = UseFetchImages();
  return (
    <>
      <Form _handleSubmit={_handleSubmit} />

      {loading && <Loading />}

      <div className="row">
        {images.map((img) => {
          return (
            <div className="col" key={img.id}>
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
