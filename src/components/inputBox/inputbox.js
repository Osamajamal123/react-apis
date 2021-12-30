import { useState } from "react";
import "./style.css";

const Inputbox = () => {
  const [data, setData] = useState(0);
  const [box, setBox] = useState();
  const [intervaltime, setIntervaltime] = useState();
  console.log("data", data);
  const submitHandler = () => {
    let newArray = [];
    for (let i = 1; i <= data; i++) {
      newArray.push({ no: i });
    }
    setBox(newArray);
    const interval= setInterval(() => {
      setIntervaltime(Math.floor(Math.random() * data) + 1);
    }, 300);
    setTimeout(() => {
    clearInterval(interval)
    }, 3000);
  };
  console.log("boxno", box);
  console.log("imterval", intervaltime);
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
          }}
        >
          <input
            style={{ width: "290px", height: "40px" }}
            type={"number"}
            onChange={(event) => {
              let duplicate = { ...data };
              duplicate = event.target.value;
              setData(duplicate);
            }}
          />
          <span onClick={() => submitHandler()}>submit</span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          {box?.map((single, index) => (
            <>
              <span
                className={
                  single.no === intervaltime ?"maploop":  "tranparentback"
               
                }
              >
                {single?.no}
              </span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Inputbox;
