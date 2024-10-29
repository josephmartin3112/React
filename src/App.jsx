// import './App.css'

// import Display from "./components/Display";
import MovieComponent from "./components/movies/MovieComponent";
//  import Color from "./components/Color";
//import NumberComponent from "./components/NumberComponent";
import Person from "./components/person/Person";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/product/ProductList";
import ButtonClick from "./components/ButtonClick";
import Counter from "./components/Counter";
import ToggleMovieComponent from "./components/movies/ToggleMovieComponent";
import TextChange from "./components/textChange";
import EcomList from "./components/ecommerce/EcomList";
import EcomAdd from "./components/ecommerce/EcomAdd";
import EcomEdit from "./components/ecommerce/EcomEdit";
import EcomAddValidation from "./components/ecommerce/EcomAddValidation";
import ToDoList from "./components/todo-app/ToDoList";
import ActorList from "./components/actor/ActorList";
import Error from "./components/Error";

import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HeaderApp from "./components/HeaderApp";
import EcomWishList from "./components/ecommerce/EcomWishList";

function App() {
  return (
    <>
      {/* <h2>This is App Component!</h2>
      <Display /> */}

      {/* <ToggleMovieComponent></ToggleMovieComponent> */}
      {/* <Color />
      <NumberComponent />
      <Person />
      <ActorList></ActorList>
      <Person></Person> 
      <ProductList></ProductList>
      <ButtonClick></ButtonClick>
      <Counter></Counter> */}
      {/* <TextChange></TextChange> */}
      {/* <EcomList></EcomList> */}
      {/* <EcomAdd></EcomAdd> */}
      {/* <EcomEdit></EcomEdit> */}
      {/* <EcomAddValidation></EcomAddValidation> */}
      {/* <ToDoList></ToDoList> */}
      <EcomWishList></EcomWishList>
      
      
      
      {/* <BrowserRouter>
        <HeaderApp></HeaderApp>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/todo" element={<ToDoList />}></Route>
          <Route path="/product-list" element={<ProductList />}></Route>
          <Route path="/ecom-list" element={<EcomList />}></Route>
          <Route path="/actor-list" element={<ActorList />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
