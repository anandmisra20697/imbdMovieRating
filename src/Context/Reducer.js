export const InitialState = {
  user: null,
  isAuth: false,
    popularMovies: null,
    error: null,
};
export default function Reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
        isAuth: true,
      };
    case "REMOVE_USER":
      return {
        ...state,
        user: null,
        isAuth: false,
      };

    case "loadPloularMovies":
      const url = "https://api.themoviedb.org/3/movie/popular";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdhZGE3ZGEwNTUwMzA1ZWJlNDkwOGQwMTE5MjA4ZSIsInN1YiI6IjY0YmY4OGQ4NmVlM2Q3MDBjN2ZhZWI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHQuASSrLyneq6icrZkIZI0XwXNz8ybf60GvnxWMNRg",
        },
      };
      const fecthCall = async () => {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log([...data.results]);
        return [...data.results];
      }
    
      return {
        ...state,
        popularMovies: fecthCall(),
      };
    default:
      return state;
  }
}
