const Home = () => {
  const data = [
    {
      name: "jackson",
    },
    {
      name: "asmita",
    },
    {
      name: "sanjog",
    },
    {
      name: "jitesh",
    },
  ];
  const resut = { name: "name", place: "dhankuta" };

  return (
    <>
      <div>
        {/* {data.map((each, index) => {
          return <h1>{each.name}</h1>;
        })} */}
        {
          <>
            <h2>{resut.name}</h2>
            <h3>{resut.place}</h3>
          </>
        }
      </div>
    </>
  );
};
export default Home;
