import { Routes, Route } from "react-router-dom";
import PostApis from "./components/postApis/postapis";
import Singledataroute from "./components/singledatagetroute/singleroutedata";
import ConcatArrays from "./components/concatArrays/concatArrays";
import Quantity from "./components/quantity/quantity";
import SelectMap from "./components/selectMAp/selectMap";
import InputBox from "./components/inputBox/inputbox";
import Tankwater from "./components/tankWater/tankWater";
import ApisTesting from "./components/apisTesting/apisTesting";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/single-data/:id" element={<Singledataroute />} />
        <Route path="/selectmap" element={<SelectMap />} />
        <Route path="/Testing-apis" element={<ApisTesting />} />
        <Route path="/tank-water" element={<Tankwater />} />
        <Route path="/input-box" element={<InputBox />} />
        <Route path="/quantity" element={<Quantity />} />
        <Route path="/concat-arrays" element={<ConcatArrays />} />
        <Route path="/" element={<PostApis />} />
      </Routes>
    </div>
  );
};
export default RoutesPage;
