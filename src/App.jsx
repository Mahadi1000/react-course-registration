import "./App.css";
import Cart from "./components/cart/Cart";
import Course from "./components/courses/Course";
import Header from "./components/header";
function App() {
  return (
    <>
      <Header></Header>
      <div>
        <Course></Course>
      </div>
      <Cart></Cart>
    </>
  );
}

export default App;
