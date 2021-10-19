import { useCallback, useEffect, useState } from "react";

export const UseFetchImages = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const peticion = useCallback(async () => {
    const key = "client_id=b5N0C9ewbVx9HtK_nJLcArHy8w7KmB2Ljqez_qbcrmA";

    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?&query=${encodeURI(
        input
      )}&${key}`;
    }
    setLoading(true);

    const res = await fetch(route);

    const data = await res.json();
    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }

    setLoading(false);
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const _handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setInput(text);
    e.target.reset();
  };

  return [images, loading, _handleSubmit];
};
