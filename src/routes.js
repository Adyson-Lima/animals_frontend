import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animals from './pages/Animals';
import NewUpdate from './pages/NewUpdate';

export default function AnimalsRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Animals/>} />
        <Route path="/newupdate/:animal_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}