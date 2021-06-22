import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const AllergenDetail = (props) => {
  const params = useParams();
  const [allergenData, setAllergenData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:4000/allergen/${params.name}`)
    .then((res) => {
      setAllergenData(res.data.data);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [params.name]);
  return (
    <div>
     <h1>{params.name}</h1>
     <p>{loading && 'The info is loading'}</p>
      <p>{!loading && allergenData}</p>
    </div>
  );
};

export default AllergenDetail;
