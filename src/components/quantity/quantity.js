import { useEffect, useState } from "react";
import Jsonrecord from "../../record.json";
const Quantity = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Jsonrecord);
  }, []);
  console.log("data", data);
  const incraeseHandler = (index) => {
    let selectedIndex = data[index];
    console.log("select", selectedIndex);
    selectedIndex.quantity = parseInt(selectedIndex.quantity) + 1;
    let duplicate = [...data];
    duplicate[index] = selectedIndex;
    setData(duplicate);
  };
  // console.log("increase",increase)
  const decreaseHandler = (index) => {
    if (data[index].quantity > 0) {
      let selectedIndexminus = data[index];
      console.log("select", selectedIndexminus);
      selectedIndexminus.quantity = parseInt(selectedIndexminus.quantity) - 1;
      let duplicate = [...data];
      duplicate[index] = selectedIndexminus;
      setData(duplicate);
    }
  };
  const optionHAndler = (value) => {
    // if(value==="sort"){
    let acsending = Jsonrecord?.sort((a, b) => (a.name - b.name ? 1 : -1));
    console.log("ascending", acsending);
    if(acsending){
      setData(acsending);
    }
    // console.log("sort",data)
    // }
  };
  return (
    <div>
      <div>
        <select onChange={(event) => optionHAndler(event.target.value)}>
          <option value="">Select Sort Option</option>
          <option value="sort">Sort</option>
          <option value="unSort">UnSort</option>
        </select>
        <span onClick={() => optionHAndler()}>Sort</span>
      </div>
      <table>
        <tr>
          <td>Id</td>
          <td>Product Name</td>
          <td>Price</td>
          <td>Quantity</td>
        </tr>
        {data?.map((single, index) => (
          <tr key={index}>
            <td>{single.id}</td>
            <td>{single.name}</td>
            <td>{single.price}</td>
            <td>{single.quantity}</td>
            <div style={{ display: "flex" }}>
              <button onClick={() => incraeseHandler(index)}>+</button>
              {/* <input value={quantity}/> */}
              <button onClick={() => decreaseHandler(index)}>-</button>
            </div>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Quantity;
