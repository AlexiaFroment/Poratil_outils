import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/auth/Home";
import { Tools } from "@/pages/auth/Tools";
import { NotFound } from "@/pages/NotFound";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
