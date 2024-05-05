import { useEffect } from 'react';
import { api } from '../../../../api/userInfo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { repositories } from '../../../../api/RepositoresApi';
export default function RenderTopics(props) {
  const [result, setResult] = useState([]);
  let[lenght , setLenght] = useState(0);
  let [searchResults, setSearchResults] = useSearchParams();

  useEffect(() => {
    

      api(props.username).then((e) => {
        setResult(e);
    
      });
      
      fetch(`https://api.github.com/users/${props.username}/repos` , {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then(e => {
        console.log(e)
      })
    
    
  }, [props.username]);


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
          {result.avatar_url ? <img src={result.avatar_url}/>: ""}
          <h5>{props.username}</h5>
        </div>
        <div className='topicsInfo'>
          <span>{props.title}</span>
        </div>
        <div className='topicsLenght'>
          
        </div>
      </div>
  );
}
