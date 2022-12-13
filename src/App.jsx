import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Card, Filter, Navbar, Pagination, Search } from './components';

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState("")
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  )
}

export default App
