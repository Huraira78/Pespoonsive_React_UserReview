import "./App.scss";
import { useState } from "react";
import { Input, Label, Button } from "reactstrap";
import { AiOutlineStar } from "react-icons/ai";
import Select from "react-select";
import starImage from "./assessts/download.jpg";
import review from "./assessts/review.PNG";
import second from "./assessts/second.PNG";
function App() {
  const stars = Array(5).fill(0);
  const [currentvalue, setcurrentvalue] = useState(false);
  const [hovervalue, sethovervalue] = useState(undefined);

  const handleclickstar = (value) => {
    setcurrentvalue(value);
  };
  const mouseover = (value) => {
    sethovervalue(value);
  };
  const mouseleave = (value) => {
    sethovervalue(undefined);
  };

  return (
    <div className="container ">
      {/* Header Section */}
      <div className="topbottom">
        <h1>Header</h1>
      </div>
      <div className="row">
        {/* Main container */}
        <div className="first-div col-sm-6">
          <img src={starImage} alt="Stars" className="starsImage" />
          <h2>WRITE REVIEW</h2>
          <h6>Share your experince by writing an review</h6>
          {/* Car Information */}
          <div className="carInfo row">
            <div className="col-sm-4 car">
              <p>Car Info*</p>
            </div>
            <div className="firstTowIn col-sm-8">
              <div className="firstSlt">
                <Select placeholder="Year" />
                <Select placeholder="Marker" />
              </div>
              <div className="firstSlt">
                <Select placeholder="Model" />
                <Select placeholder="Varient" />
              </div>
            </div>
          </div>
          {/* User Opiniion */}
          <div className="opinion">
            <div>
              <h4>Your Opinion</h4>
            </div>
            <div className="container">
              <div className="d-flex justify-content-between mx-5 reviewtextstar">
                <div className=" reviewText" id="types">
                  <p>Style</p>
                  <p>Confort</p>
                  <p>Performance</p>
                  <p>Value For Money</p>
                  <p>Fuel Economy</p>
                </div>
                <div className="d-flex flex-column stars">
                {stars.map((_, index) => {
                  return (
                      <div className=" reviewText d-flex">
                        {stars.map((_, index) => {
                          return (
                            <p>
                              <AiOutlineStar key={index} 
                              className={`${currentvalue ? 'newStar': '' }`}
                              onClick={()=>handleclickstar(index+1)}
                              onMouseOver={()=>mouseover(index+1)}
                              onMouseLeave={mouseleave}
                              />
                            </p>
                          );
                        })}
                        {/* <p>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </p> */}
                        {/* <p>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </p>
                  <p>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </p>
                  <p>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </p>
                  <p>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </p> */}
                      </div>
                  );
                })}
                </div>
              </div>
            </div>
          </div>
          {/* Review Section */}
          <div className="reviewTitle row">
            <div className="col-sm-3">
              <Label htmlFor="reviewtitle">Review Title</Label>
            </div>
            <div className="reviewTitleInput">
              <Input className="col-sm-11 px-2"
                type="text"
                placeholder="Write Title"
                id="reviewtitle"
              ></Input>
            </div>
          </div>
          <div className="yourReview">
            <div>
              <Label htmlFor="yourReview">Your Review</Label>
            </div>
            <div>
              <textarea
                type="textarea"
                placeholder="Write Your Review Here"
                id="YourReview"
                cols="47"
                rows="5"
              ></textarea>
              <p>Enter atleast more then 250 characters.</p>
            </div>
          </div>
          {/* fuel Average Section */}
          <div className="fuel">
            <div>
              <Label htmlFor="average">Fuel Average</Label>
            </div>
            <div className="inputFields">
              <div>
                <Input
                  type="text"
                  placeholder="City Mileage"
                  id="inputFields"
                ></Input>
              </div>
              <span>
                <p>-</p>
              </span>
              <div>
                {" "}
                <Input
                  type="text"
                  placeholder="Highway Mileage"
                  id="inputFields"
                ></Input>
              </div>
            </div>
            <div className="km">
              <p>KM/L</p>
            </div>
          </div>
          <div className="know">
            <Select placeholder="You know this car because" />
          </div>
          <div className="Suggestion">
            <div>
              <Input type="checkbox"></Input>
            </div>
            <div>
              <p>
                Do you want to get featured in Autodeals onwer review series?
              </p>
            </div>
          </div>
          {/* Personal info Section */}
          <div className="City">
            <div>
              <Label htmlFor="city">City*</Label>
            </div>
            <div>
              <Select placeholder="Select City" id="city"></Select>
            </div>
          </div>
          <div className="phone">
            <div>
              <Label htmlFor="Phone">Phone*</Label>
            </div>
            <div>
              <Select placeholder="Phone Number" id="Phone"></Select>
            </div>
          </div>
          <div>
            <Button color="warning" size="lg" className="my-5 px-5">
              Next
            </Button>
          </div>
        </div>
        {/* Second Main div For images on right side */}
        <div className="second-div col-sm-6">
          <div className="image1">
            <img src={review} alt="reviewImage" />
          </div>
          <div className="second">
            <img src={second} alt="second" />
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="Topbottom">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
