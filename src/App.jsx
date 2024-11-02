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
import HeaderTraining from "./components/training/HeaderTraining";
import CohortList from "./components/training/cohort/CohortList";
import VenueList from "./components/training/venue/VenueList";
import VenueAdd from "./components/training/venue/VenueAdd";
import CohortView from "./components/training/cohort/CohortView.jsx";
import JsonPlaceholder from "./components/JsonPlaceholder.jsx";
import HeaderTrainingHttp from "./components/training-http/HeaderTrainingHttp.jsx";
import CohortListHttp from "./components/training-http/cohort-http/CohortListHttp.jsx";
import VenueAddHttp from "./components/training-http/venue-http/VenueAddHttp.jsx";
import CohortAdd from "./components/training/cohort/CohortAdd.jsx";
import CohortViewHttp from "./components/training-http/cohort-http/CohortViewHttp.jsx";
import CohortAddHttp from "./components/training-http/cohort-http/CohortAddHttp.jsx";
import VenueListHttp from "./components/training-http/venue-http/VenueAddHttp.jsx";

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
      {/* <EcomWishList></EcomWishList> */}
      
      
      {/* <VenueList></VenueList>
      <CohortList></CohortList> */}
      {/* <VenueAdd></VenueAdd> */}
      
      
      <BrowserRouter>
        <HeaderApp></HeaderApp>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/todo" element={<ToDoList />}></Route>
          <Route path="/ecom-list" element={<EcomList />}></Route>
          <Route path="/actor-list" element={<ActorList />}></Route>
          <Route path="/fake-api" element={<JsonPlaceholder />}></Route>
          <Route path="/training" element={<HeaderTraining />}>
            <Route path="venue-list" element={<VenueList />}></Route>
            <Route path="cohort-list" element={<CohortList />}></Route>
            <Route path="cohort-view/:cid" element={<CohortView />}></Route>
            <Route path="cohort-add" element={<CohortAdd />}></Route>
            <Route path="venue-add" element={<VenueAdd />}></Route>
          </Route>
          <Route path="/training-http" element={<HeaderTrainingHttp />}>
            <Route path="venue-list-http" element={<VenueListHttp />}></Route>
            <Route path="cohort-list-http" element={<CohortListHttp />}></Route>
            <Route
              path="cohort-view-http/:cid"
              element={<CohortViewHttp />}
            ></Route>
            <Route path="cohort-add-http" element={<CohortAddHttp />}></Route>
            <Route path="venue-add-http" element={<VenueAddHttp />}></Route>
          </Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
