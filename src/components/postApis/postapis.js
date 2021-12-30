import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../../config";
import {useLocation} from "react-router-dom"
import {useNavigate} from "react-router-dom"
const Postapis = (props) => {
  let location=useLocation();
  let navigates=useNavigate();
  console.log("location",location);


  const [user, setUser] = useState({
    title: "",
    body: "",
  });
  const [postrecord, setPostrecord] = useState();
  console.log("dataget", postrecord);
  useEffect(() => {
    axios
      .get(` ${BaseUrl}/posts`)
      .then((response) => setPostrecord(response.data));
  }, []);
  const updateHandler = (event) => {
    event.preventDefault();
    let payload = {
      id: 101,
    };
    axios
      .post(` ${BaseUrl}/posts`, payload)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
const deletedata=(id)=>{
    axios
    .delete(` ${BaseUrl}/posts/`+id)
    .then((response) => {
        let datadelete=postrecord?.filter((e)=>e.id!==id)
        setPostrecord(datadelete)
        console.log("delete", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
}
  return (
    <div>
      <form onSubmit={(event) => updateHandler(event)}>
        <input
          placeholder="title"
          onChange={(event) => {
            let duplicate = { ...user };
            duplicate.title = event.target.value;
            setUser(duplicate);
          }}
        />
        <input
          placeholder="body"
          onChange={(event) => {
            let duplicate = { ...user };
            duplicate.body = event.target.value;
            setUser(duplicate);
          }}
        />
        <button type={"submit"}>click</button>
      </form>
      <table>
        <tr>
          <th>userid</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        {postrecord?.map((single, index) => (
          <tr key={index}>
            <td>{single.userId}</td>
            <td>{single.id}</td>
            <td>{single.title}</td>
            <td>{single.body}</td>
            <button onClick={()=>deletedata(single.id)}>delete</button>
            <button onClick={()=>navigates('single-data/'+single.id)}>slug</button>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Postapis;
