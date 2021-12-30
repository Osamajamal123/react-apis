import "./style.css";
import { useState } from "react/cjs/react.development";

const Tankwater = () => {
  const [count, setCount] = useState(100);
  const [addcount, setAddcount] = useState(0);
  const substractionHandler = (value) => {
    console.log("value", value);
    if (count === 100) {
      setCount(100 - value);
      setAddcount(value);
    }
    if (count === 75) {
      setCount(100 - value);
      setAddcount(value);
    }
    if (count === 50) {
      setCount(100 - value);
      setAddcount(value);
    }
    if (count === 25) {
      setCount(100 - value);
      setAddcount(value);
    }
    if (count === 10) {
      setCount(100 - value);
      setAddcount(value);
    }
    if(addcount===10){
      setAddcount(value);
      setCount(100-value)
    }
    if(addcount===100){
      setAddcount(value);
      setCount(100-value)
    }
  };
console.log("leftcount",count)
console.log("rightaddcount",addcount)
  const heightHandler =(value)=>{
    console.log("valueheight",value)
    if (addcount === 100) {
      setAddcount(100 - value);
      setCount(value);
      
    }
    if (addcount === 75) {
      setAddcount(100 - value);
      setCount(value);
    
    }
    if (addcount === 50) {
      setAddcount(100 -value);
      setCount( value);

    }
    if (addcount === 25) {
      setAddcount(100 - value);
      setCount(value);
     
    }
    if (addcount === 0) {
      setAddcount(100 - value);
      setCount(value);
    }
    if(count===10){
      setCount(value);
      setAddcount(100-value)
    }
    if(count===100){
      setCount(value);
      setAddcount(100-value)
    }
  }
  console.log("rightcount",count)
  console.log("leftaddcount",addcount)
  return (
    <div>
      <div className="flexdiv">
        <div className="tanloneflex">
          <div className="whiteback">
            <div className="flexEndcolor2">
              <div style={{ background: "blue", height: count + "%" }}></div>
            </div>
          </div>
          <ul className="ulFlex">
            <li onClick={() => {
          
              heightHandler(100)
            }}>100ltr</li>
            <li onClick={() => {
              count<75 &&
              heightHandler(75)
            }}
            className={`  ${count<75 ?  "blackcolor": "darkcolor"}`}
            >75ltr</li>
            <li onClick={() => {
              count<50 &&
                heightHandler(50)}
            }
            className={` ${count<50 ?  "blackcolor": "darkcolor"}`}
            >50ltr</li>
            <li onClick={() => {
              count<25 &&
              heightHandler(25)
            }}
            className={` ${count<25 ? "blackcolor" : "darkcolor"}`}
            >25ltr</li>
            <li onClick={() => {
              count<10 &&
              heightHandler(10)
            }}
            className={` ${count<10 ?  "blackcolor" : "darkcolor" }`}
            >10ltr</li>
          </ul>
        </div>
        <div className="tanloneflex2">
          <div className="whiteback2">
            <div className="flexEndcolor">
              <div style={{ background: "blue", height: addcount + "%" }}></div>
            </div>
          </div>
          <ul className="ulFlex2">
            <li
              onClick={() => {
             
                substractionHandler(100);
              }}
            >
              100ltr
            </li>
            <li
              onClick={() => {
                addcount<75 &&
                substractionHandler(75);
              }}
              
            >
              75ltr
            </li>
            <li
              onClick={() => {
                addcount<50 &&
                substractionHandler(50);
              }}
            >
              50ltr
            </li>
            <li
              onClick={() => {
                addcount<25 &&
                substractionHandler(25);
              }}
            >
              25ltr
            </li>
            <li
              onClick={() => {
                addcount<10 &&
                substractionHandler(10);
              }}
            >
              10ltr
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Tankwater;
