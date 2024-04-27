import "./App.css";
import { Lists, MyNav, Home } from "./components";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { DUMMY_DATA } from "./store/store";


function App() {
  const [list, setList] = useState(DUMMY_DATA)
  const [deletedList, setDeletedList] = useState([])

  return (
    <div>
      <MyNav expand="sm" />
      <div className="App">
        <Routes>
          <Route path="*" element={<Home list={list} />} />
          <Route path="/lists" element={<Lists list={list} setList={setList} deletedList = {deletedList}  setDeletedList={setDeletedList}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
