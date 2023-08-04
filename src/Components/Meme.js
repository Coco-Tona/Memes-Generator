import React from "react";
// import memesData from "./memesData";

export default function Meme() {
  // const [memeImages, setMemeImages] = React.useState(
  //   "http://i.imgflip.com/1bij.jpg"
  // );

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  // console.log(meme);
  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);
  // console.log(allMeme);
  function getMemeImg() {
    const memesArray = allMeme;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);
    const url = memesArray[randomNumber].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
    // console.log(allMeme);
  }

  function handleForm(event) {
    const { name, type, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleForm}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleForm}
        />
        <button onClick={getMemeImg} className="form--button">
          Generate a new meme image🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
