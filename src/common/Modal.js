import React from "react";

const withModal = (WrapperComponent) => {
  const showModal = ({ message }) => {
    console.log(message);
  };

  return () => <WrapperComponent showModal={showModal} />;
};

export default withModal;
