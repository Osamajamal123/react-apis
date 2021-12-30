import { useEffect, useState } from "react";
import SelectRecord from "../../selectJson.json";
import { v4 as uuidv4 } from "uuid";
const SelectMap = () => {
  const [data, setData] = useState([]);
  const [selectdata, setSelectData] = useState([]);
  const [addinput, setAddinput] = useState([
    {
      id: 1,
      name: "",
    },
  ]);
  console.log("data", data);
  useEffect(() => {
    setData(SelectRecord);
  }, []);
  const selectHandler = (id) => {
    let filterdata = data?.find((e) => e.id === id);
    if (filterdata) {
      setSelectData([...selectdata, filterdata]);
    }
    let deleteData = data?.filter((e) => e.id !== id);
    if (deleteData) {
      setData(deleteData);
    }
  };
  const dataHandler = (id) => {
    let filterdataremove = selectdata?.find((e) => e.id === id);
    setData([...data, filterdataremove]);
    let deletefilter = selectdata?.filter((e) => e.id !== id);
    setSelectData(deletefilter);
  };
  const AddinputHnadler = () => {
    if(addinput?.length<=4){
      let newRecord = {
        id: uuidv4(),
        name: "",
      };
      setAddinput([...addinput, newRecord]);
    }
   
  };
  console.log("newrecord", addinput);
const deleteHandler=(id)=>{
console.log("delete",id)
let remainingRecord= addinput?.filter((e)=>e.id!==id)
console.log("deletedata",remainingRecord)
setAddinput(remainingRecord)
}
  return (
    <div>
      <select
        style={{ width: "300px", height: "30px" }}
        onChange={(event) => selectHandler(event.target.value)}
      >
        <option value="0">select an option</option>
        {data?.map((single, index) => (
          <option value={single.id}>
            {index + 1} {single.name}
          </option>
        ))}
      </select>
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {selectdata?.map((single, index) => (
          <div
            style={{
              background: "gray",
              color: "white",
              width: "fit-content",
              padding: "10px",
              borderRadius: 10,
              margin: "0px 5px",
              fontSize: "25px",
            }}
          >
            {single.name}{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => dataHandler(single.id)}
            >
              x
            </span>
          </div>
        ))}
      </div>
      <label>Product Name</label>
      <div>
        <input className="Product Name" />
      </div>
      <label>Add Product Color</label>
      <div>
        {addinput?.map((single, index) => (
          <div>
            <input
              onChange={(event) => {
                let duplicate = [...addinput];
                duplicate[index].name = event.target.value;
                setAddinput(duplicate);
                
              }}
              value={single?.name}
            />
            {addinput?.length - 1 === index ? (
                  <button onClick={() => AddinputHnadler()}>add</button>
            ):
          (  <button onClick={() => deleteHandler(single.id)}>delete</button>)
            
              }
          </div>
        ))}
      </div>
    </div>
  );
};
export default SelectMap;
