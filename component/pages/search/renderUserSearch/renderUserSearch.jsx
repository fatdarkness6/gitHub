import { useEffect } from 'react';
import { api } from '../../../../api/userInfo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
export default function SearchUsers(props) {
  const [result, setResult] = useState([]);

  let [searchResults, setSearchResults] = useSearchParams();

  useEffect(() => {
    

      api(props.username).then((e) => {
        setResult(e);
        console.log(e);
      });
    
  }, [props.username]);
console.log(props.update)

  function cal() {
    if (result.followers > 1000) {
      return (
        <span>
          {Math.trunc(result.followers / 1000)}k
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
    <>
      <div className='search-users'>
      <div className='search-users-container'>
        <div className='search-users-image-p1'>
          <img src={props.image} alt='' />
        </div>
        <div className='search-users-info-p2'>
          <div className='search-users-info-p2-1'>
            <Link to={`/${result.login}`}>
              <h5>{result.name}</h5>
            </Link>
            <Link to={`/${result.login}`}>
              <h5>{props.username}</h5>
            </Link>
          </div>
          <div className='search-users-info-p2-2'>
            <span>{result.bio}</span>
          </div>
          <div className='search-users-info-p2-3'>
            <span>{result.location}</span>
            <span>.</span>
            <div className='public-repos'>
              <i class='fa-solid fa-inbox'></i>
              <span>{result.public_repos}</span>
              </div>
              <span>.</span>
              <div className='users'>
              <i class="fa-solid fa-users"></i>
                <span>{cal()}</span>
              

            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
}
