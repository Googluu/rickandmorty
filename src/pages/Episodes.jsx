import React, { useState, useEffect } from 'react';
import { Card, InputGroup } from '../components';

const Episodes = () => {
  const [results, setResults] = useState([])
  const [info, setInfo] = useState([])
  const [id, setId] = useState(1)
  let { air_date, episode, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      const a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json);
        })
      );
      setResults(a);
    })();
  }, [api])
  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episode name :{' '}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
    </div>
  );
}

export default Episodes