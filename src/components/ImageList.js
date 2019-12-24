import React from "react";

export const ImageList = props => {
  const images = props.images.map(({ desciption, id, urls }) => {
    return <img key={id} src={urls.regular} alt={desciption} />;
  });
  return <div>{images}</div>;
};
