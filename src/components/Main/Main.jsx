import React from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import Row from '../Row'
import requests from '../../requests'

function Main() {
  return (
    <div>
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
  )
}

export default Main