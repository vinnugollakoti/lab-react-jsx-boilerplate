import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};
let data = imageData();
function App() {
  return (
    <>
    <center>
    <h1 className="head">Kalvium gallery</h1>
    <div className="grid">
      {data.map((item) => {
        return <img src={item.img} alt="" key={item.id} />;
      })}
      </div>
      </center>
    </>
  );
}

export default App;