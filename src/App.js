import React from "react";
import { connect } from "react-redux";
// import updateMovies from "./store/actions/updateMovies";

function App(props) {
  console.log("props", props);
  return (
    <>
      <div>REDUX MOVIE LIST APP</div>
      <div> Your current movie is: {props.movies.name} </div>
    </>
  );
}

const MapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(MapStateToProps)(App);
