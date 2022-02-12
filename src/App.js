import React from "react";
import { connect } from "react-redux";
import updateMovies from "./store/actions/updateMovies";
import fetchUsers from "./store/actions/fetchUsers";

function App(props) {
  console.log("props", props);
  console.log("legnth", props.users.length);
  return (
    <>
      <h1>REDUX MOVIE LIST APP</h1>
      <div> Your current movie is: {props.movies.name} </div>
      <button onClick={props.updateMovies}> Select New Movie</button>
      <br />

      {!props.users.length ? (
        <p>THERE ARE NO USERS</p>
      ) : (
        props.users.map((user) => (
          <p key={user.id}>
            {user.first_name} - {user.email}
          </p>
        ))
      )}

      <button onClick={props.fetchUsers}>Fetch Users</button>
    </>
  );
}

const MapStateToProps = (state) => {
  console.log("state in MapStateToProps", state);
  return {
    movies: state.movies,
    users: state.users,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
