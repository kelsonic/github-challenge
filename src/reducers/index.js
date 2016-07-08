// Ignore this, as user favorite repos will be saved via the REST API.
const initialState = {
  favorites: []
};

export default function reducer(state = initialState, action) {
  return state;
}
