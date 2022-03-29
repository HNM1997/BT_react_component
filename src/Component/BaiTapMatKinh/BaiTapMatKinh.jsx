import React, { Component } from "react";
import dataGlasses from "../../data/dataGlasses.json";

export default class BaiTapMatKinh extends Component {
  arrKinh = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };

  renderKinh = () => {
    return this.arrKinh.map((kinh, index) => {
      return (
        <div className=" col-2" key={index}>
          <button
            onClick={() => {
              this.setState({
                id: kinh.id,
                price: kinh.price,
                name: kinh.name,
                url: kinh.url,
                desc: kinh.desc,
              });
            }}
          >
            <img src={kinh.url} alt="..." className="w-100" />
          </button>
        </div>
      );
    });
  };
  render() {
    const styleImg = {
      width: "160px",
      top: "90px",
      right: "190px",
      opacity: "0.8",
    };
    const infoGlass = {
      width: "300px",
      top: "250px",
      right: "120px",
      paddingLeft: "15px",
      backgroundColor: "rgba(250,127,0,0.5)",
      textAlign: "left",
      height: "116px",
    };
    return (
      <div
        style={{
          backgroundImage: "url(./img/glassesImage/background.jpg)", maxHeight:"100vh", height:"100vh"
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.5)" ,height:"100vh"}}>
          <h2
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(0,0,0,.5)" }}
          >
            TRY GLASSES APP ONLINE
          </h2>

          <div className="container">
            <div className="row ">
              <div className="col-6 text-center">
                <div className="position-relative">
                  <img
                    style={{ width: "300px" }}
                    src="./img/glassesImage/model.jpg"
                    alt="..."
                  />
                  <img
                    style={styleImg}
                    className="position-absolute"
                    src={this.state.url}
                    alt="..."
                  />
                  <div className="position-absolute" style={infoGlass}>
                    <h5 className="pt-2 " style={{color:'blue',fontWeight:'900'}}>{this.state.name}</h5>
                    <p>{this.state.desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-6 text-center">
                <img
                  style={{ width: "300px" }}
                  src="./img/glassesImage/model.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="row pt-4">{this.renderKinh()}</div>
          </div>
        </div>
      </div>
    );
  }
}
