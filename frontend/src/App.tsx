import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/layout/Layout";
import { Home } from "@/pages/auth/Home";
import { Tools } from "@/pages/auth/Tools";
import { NotFound } from "@/pages/NotFound";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/tools'>
              <Route index element={<Tools />} />
              <Route path=':category' element={<Tools />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
