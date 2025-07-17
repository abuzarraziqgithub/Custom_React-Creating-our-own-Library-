function Image({ pic, heading }) {
  return (
    <>
      <img src={pic} alt="image of hitesh" />
      <h1>{heading}</h1>
    </>
  );
}

export default Image;
