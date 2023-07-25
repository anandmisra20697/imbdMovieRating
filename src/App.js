
import "./App.css";
import Header from "./components/Header/Header";

function App() {
//   const fetch = require("node-fetch");

//   const url = "https://api.themoviedb.org/3/tv/popular";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdhZGE3ZGEwNTUwMzA1ZWJlNDkwOGQwMTE5MjA4ZSIsInN1YiI6IjY0YmY4OGQ4NmVlM2Q3MDBjN2ZhZWI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHQuASSrLyneq6icrZkIZI0XwXNz8ybf60GvnxWMNRg",
//     },
//   };

//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error("error:" + err));

  return (
    <div className="App">
      
      <Header />
    </div>
  );
}

export default App;
