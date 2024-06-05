import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function SearchFilter(props) {
  const [search, setSearchParams] = useSearchParams();
  let [state, setState] = useState('');

  function openOrClosed(update) {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set('state', update);
    window.location.search = searchParams.toString();
  }

  let lan = props.lan;
  let arry = [];
  let newArray = [];

  return (
    <>
      <div className='searchFilter'>
        <div className='filterBy'>
          <h4>Filter by</h4>
        </div>
        <div className='filterOption'>
          <ul>
            <div
              className={
                search.get('type') == 'repositories' ? 'activeSearch' : null
              }>
              <Link to={`/search?q=${props.q}&type=repositories&page=1`}>
                <li
                  onClick={() => {
                    if (search.get('state')) {
                      search.delete('state');
                    }
                  }}>
                  <i class='fa-solid fa-money-bill-transfer'></i>
                  <h5>Repositories</h5>
                </li>
              </Link>
            </div>
            <div
              className={
                search.get('type') == 'issues' ? 'activeSearch' : null
              }>
              <Link to={`/search?q=${props.q}&type=issues&page=1`}>
                <li>
                  <i class='fa-solid fa-bullseye'></i>
                  <h5>Issues</h5>
                </li>
              </Link>
            </div>
            <div
              className={search.get('type') == 'users' ? 'activeSearch' : null}>
              <Link to={`/search?q=${props.q}&type=users&page=1`}>
                <li>
                  <i class='fa-regular fa-user'></i>
                  <h5>Users</h5>
                </li>
              </Link>
            </div>
            <div
              className={
                search.get('type') == 'commits' ? 'activeSearch' : null
              }>
              <Link to={`/search?q=${props.q}&type=commits&page=1`}>
                <li
                  className={
                    search.get('type') == 'commits' ? 'activeSearch' : null
                  }>
                  <i class='fa-solid fa-code-commit'></i>
                  <h5>Commits</h5>
                </li>
              </Link>
            </div>
            <div className={search.get('type') == 'topics' && 'activeSearch'}>
              <Link to={`/search?q=${props.q}&type=topics`}>
                <li>
                  <i class='fa-solid fa-snowflake'></i>
                  <h5>Topics</h5>
                </li>
              </Link>
            </div>
          </ul>
        </div>
        <div className='filterLanguages'>
          {search.get('type') == 'issues' ? (
            <>
              <span>State</span>
              <div className='showLang'>
                <div
                  onClick={() => {
                    // setState('open')
                    openOrClosed('open');
                  }}
                  className='ver1 vrr'>
                  <i class='fa-regular fa-circle-dot fa-rotate-90'></i>
                  <span>Open</span>
                </div>
                <div
                  onClick={() => {
                    setState('close');
                    openOrClosed('close');
                  }}
                  className='ver2 vrr'>
                  <i class='fa-regular fa-circle-xmark'></i>
                  <span>Closed</span>
                </div>
              </div>
            </>
          ) : (
            search.get('type') == 'repositories' && (
              <>
                <span>language</span>
                {lan.map((e) => {
                  arry.push(e.language);
                })}
                {arry.forEach((e) => {
                  if (!newArray.includes(e)) {
                    newArray.push(e);
                  }
                })}
                {newArray
                  .filter((e) => {
                    return e !== null && e !== undefined && e !== '';
                  })
                  .map((e) => {
                    return (
                      <>
                        <div
                          onClick={() => {
                            let searchParams = new URLSearchParams(
                              window.location.search
                            );
                            searchParams.set('languge', e);
                            window.location.search = searchParams.toString();
                          }}
                          className='showLan'>
                          <h6>{e}</h6>
                        </div>
                      </>
                    );
                  })}
              </>
            )
          )}
        </div>
      </div>
    </>
  );
}
