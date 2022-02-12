export const FETCH_USERS = "FETCH_USERS";

const fetchUsers = (dispatch) => {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((response) =>
      dispatch({ type: FETCH_USERS, payload: response.data })
    );
};

export default fetchUsers;
