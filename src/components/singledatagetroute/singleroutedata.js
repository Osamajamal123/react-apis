import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../config";
import axios from "axios";

const Singleroutedata = (props) => {
  const [user, setUser] = useState();
  console.log("userdata", user);
  let Params = useParams();
  console.log("params", Params);
  useEffect(() => {
    axios
      .get(` ${BaseUrl}/posts/` + Params.id)
      .then((response) => setUser(response.data))
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  const updateHandler=(event)=>{
      event.preventDefault();
    axios
    .put(` ${BaseUrl}/posts/` + Params.id,user)
    .then((response) => setUser(response.data) )
    .catch((error) => {
      console.log("error", error);
    })
  }
  return (
    <div>
      <form onSubmit={(event)=>updateHandler(event)}>
        <input
          value={user?.userId}
          onChange={(event) => {
            let duplicate = { ...user };
            duplicate.userId = event.target.value;
            setUser(duplicate);
          }}
        />
        <input
          value={user?.id}
          onChange={(event) => {
            let duplicate = { ...user };
            duplicate.id = event.target.value;
            setUser(duplicate);
          }}
        />

        <input
          value={user?.title}
          onChange={(event) => {
            let duplicate = { ...user };
            duplicate.title = event.target.value;
            setUser(duplicate);
          }}
        />
        <input 
        value={user?.body} 
         onChange={(event) => {
            let duplicate = { ...user };
            duplicate.body = event.target.value;
            setUser(duplicate);
          }}
        />
        <button type={"submit"}>update</button>
      </form>
    </div>
  );
};
export default Singleroutedata;
