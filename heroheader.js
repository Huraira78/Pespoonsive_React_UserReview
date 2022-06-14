import React from "react";
import "./heroHeader.scss";
import moment from "moment";
import Select from "react-select";
import { Button } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import cardImage from "../assessts/carreview/card.png";
const Heroheader = () => {
  const arr = Array(5).fill(0);
  const obj = new Date();
  const date = moment(obj).format("LL");
  // const day=date.getDate()
  // const month=date.getMonth()
  // const year=date.getFullYear()
  return (
    <div className="Main-Div">
      <div className="jumbotron heroheader">
        <div className="container">
        <div className="row">
          <div className="card herocard col-sm-5">
            <h4>Seacrh Car Review</h4>
            <p>share first hand experience of your car with other buyers. </p>
            <Select placeholder="All Makes" />
            <Select placeholder="All Models" />
            <Button color="warning">
              <a href="">
                <AiOutlineSearch /> Search
              </a>
            </Button>
            <Button color="primary">
              <a href="">
                <FiEdit /> Write Review
              </a>
            </Button>
          </div>
          <div className="heroText col-sm-7">
            <h1>Search Car Reviews</h1>
            <p>Explore user ratings and read opinions</p>
          </div>
        </div>
        </div>
      </div>
      <div className="container scnd-div">
        <h3>
          Explore User Rating <span className="total">(Total 322)</span>
        </h3>

        <div className="row">
          {arr.map((elem) => {
            return (
              <div className="col-sm-6">
                <div className="card">
                <div className="cardFirstDiv d-flex">
                  <div className="img">
                    <div>
                      <img src={cardImage} alt="CardImage" />
                    </div>
                  </div>
                  <div className="imgInfo mx-3">
                    <h4>Fiat 500X Hybrid</h4>
                    <div className="stars d-flex align-self-center">
                      {arr.map((_,index) => {
                        return (
                          <>
                            <h4>
                              <AiFillStar key={index}/>
                            </h4>
                          </>
                        );
                      })}
                      <h5 className="my-1 mx-1 text-muted">(4.8)</h5>
                    </div>
                  </div>
                </div>
                <div className="personInfo">
                  <h3 className="mb-0">Ebad Rehman</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae quae omnis impedit eveniet! Voluptate quo eveniet
                    nemo quisquam corporis! Dolores, officia quibusdam.
                    Explicabo quo atque at tempora. Dolores, quos dolorem!
                  </p>
                  {/* <p>posted on {day} {month} {year} </p> */}
                  <p className="date">posted on {date} </p>
                </div>
              </div>
              </div>
            );
          })}
        </div>

        {/* <div className="card">
          <div className="cardFirstDiv d-flex">
            <div className="img">
              <div>
                <img src={cardImage} alt="CardImage" />
              </div>
            </div>
            <div className="imgInfo mx-3">
              <h4>Fiat 500X Hybrid</h4>
              <div className="stars d-flex align-self-center">
                {arr.map((elem) => {
                  return (
                    <>
                      <h4>
                        <AiFillStar />
                      </h4>
                    </>
                  );
                })}
                <h5 className="my-1 mx-1 text-muted">(4.8)</h5>
              </div>
            </div>
          </div>
          <div className="personInfo">
            <h3 className="mb-0">Ebad Rehman</h3>
            <p >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              quae omnis impedit eveniet! Voluptate quo eveniet nemo quisquam
              corporis! Dolores, officia quibusdam. Explicabo quo atque at
              tempora. Dolores, quos dolorem!
            </p>
            {/* <p>posted on {day} {month} {year} </p> */}
        {/* <p className="date">posted on {date} </p> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Heroheader;
