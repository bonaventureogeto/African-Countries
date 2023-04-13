import "./App.css";
import React, { useState } from "react";

const countries = [
  {
    name: "Algeria",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Angola",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Benin",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Botswana",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Burkina Faso",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Burundi",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Cameroon",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Cape Verde",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Central African Republic",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Chad",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Comoros",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Democratic Republic of the Congo",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Republic of the Congo",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Djibouti",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Egypt",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Equatorial Guinea",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Eritrea",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Eswatini (Swaziland)",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Ethiopia",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
  {
    name: "Gabon",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  },
];

function App() {
  const [country, setCountry] = useState({
    name: "Algeria",
    flag: "https://media.istockphoto.com/id/1213195172/video/kenya-waving-flag-national-3d-kenyan-flag-waving-sign-of-kenya-seamless-loop-animation-kenyan.jpg?s=640x640&k=20&c=kBXwbhydaaugUAoZnUH6yH98KsT-f7LTLGqEDemAe0U=",
  });

  function handleClick() {
    const randomCountry =
      countries[Math.floor(Math.random() * countries.length)];
    setCountry(randomCountry);
  }

  return (
    <div className="App">
      <h1>African Countries</h1>
      {/* <div className="countries"> */}
      {/* {countries.map((country) => (
          <div className="country">
            <img src={country.flag} alt={country.name} />
            <h2>{country.name}</h2>
          </div>
        ))} */}
      <div className="country">
        <img src={country.flag} alt={country.name} />
        <h2>{country.name}</h2>
        <button onClick={handleClick}>Next Country</button>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
