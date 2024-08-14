import { BrowserRouter } from "react-router-dom";
import { AuthRouter } from "@/router/AuthRouter";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthRouter />
      </BrowserRouter>
    </>
  );
};
