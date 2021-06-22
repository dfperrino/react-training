import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const HelpDetail = (props) => {
  const params = useParams();
  const [helpData, setHelpData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:4000/help/${params.name}`)
    .then((res) => {
      setHelpData(res.data.data);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [params.name]);

  return (
    <div>
     <h3>{params.name}</h3>
     <p>{loading && 'The info is loading'}</p>
     <p>{!loading && helpData}</p>
    </div>
  );
};

export default HelpDetail;
