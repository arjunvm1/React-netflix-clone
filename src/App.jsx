
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster={true} fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending in India" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action-movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy-movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror-movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic-movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
