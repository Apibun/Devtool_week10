import "./App.css";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Numbers, setNumbers] = useState([]);
  const [Image, setImage] = useState(null);
  const [ResponseImage, setResponseImage] = useState(null);

  const Readfileimage = () => {
    let Fileinput = document.getElementById("fileinput").files[0];
    let fileReader = new FileReader();
    fileReader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        setImage(fileReader.result);
        // console.log(fileReader.result);
      },
      false
    );
    if (Fileinput) {
      fileReader.readAsDataURL(Fileinput);
    }
  };

  const Sendimage = async () => {
    let Sendnumbers = Numbers.split(" ");
    try {
      // setLoading(true);
      const result = await axios.post(
        `http://${window.location.hostname}:8088/process-image`,
        { image: Image, name: Name, surname: Surname, numbers: Sendnumbers },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // setData(result.data);
      setResponseImage(result.data.processed_image);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>
          Choose image :{" "}
          <input type="file" id="fileinput" onChange={() => Readfileimage()} />
        </label>
        <label>
          Enter your name :{" "}
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            size="15"
            placeholder="Apibun"
          />
        </label>
        <label>
          Enter your surname :{" "}
          <input
            type="text"
            onChange={(event) => {
              setSurname(event.target.value);
            }}
            size="15"
            placeholder="Somsri"
          />
        </label>
        <label>
          Enter number :{" "}
          <input
            type="text"
            onChange={(event) => {
              setNumbers(event.target.value);
            }}
            size="15"
            placeholder="1 2"
          />
        </label>
        <button onClick={() => Sendimage()}>Send</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <img src={Image} height="300" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <img src={ResponseImage} height="300" />
      </div>
    </div>
  );
}
