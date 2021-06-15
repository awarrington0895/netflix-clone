import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Row from "./components/Row";

const App = () => (
  <div className="app">
    <Nav />

    <Header />
    <Row title="Netflix Originals" type="netflix-originals" />
    <Row title="Netflix Originals" movieType="netflix-originals" />
    <Row title="Trending Now" movieType="trending-now" />
    <Row title="Top Rated" movieType="top-rated" />
    <Row title="Action Movies" movieType="action-movies" />
    <Row title="Horror Movies" movieType="horror-movies" />
    <Row title="Romance Movies" movieType="romance-movies" />
    <Row title="Documentaries Movies" movieType="documentaries-movies" />
  </div>
);
export default App;
