import { useEffect } from 'react';
import { api } from '../../../../api/userInfo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { repositories } from '../../../../api/RepositoresApi';
import axios from 'axios';
export default function RenderTopics(props) {
  const [result, setResult] = useState([]);
  let[lenght , setLenght] = useState(0);

  useEffect(() => {
    

      api(props.username).then((e) => {
        setResult(e);
        console.log(e);
        
      });
      
      
    
  }, [props.title]);

useEffect(() => {
  repositories(props.username).then((e) => {
    setLenght(e.length);
  });
} , [])

  function cal() {
    if (result.followers > 1000) {
      return (
        <span>
          {Math.trunc(result.followers / 1000)}+
        </span>
      );
    } else {
      return (
        <span>
          {result.followers} 
        </span>
      );
    }
  }
  return (
    <div className='topicsHeader'>
        <div className='topicsImageAndE'>
          { <img src={result.avatar_url}/>}
          <h5>{props.username}</h5>
        </div>
        <div className='topicsInfo'>
          <span>{props.title}</span>
        </div>
        <div className='topicsLenght'>
        <i class="fa-solid fa-money-bill-transfer"></i>
          <h6>{lenght} +</h6>
        </div>
      </div>
  );
}
