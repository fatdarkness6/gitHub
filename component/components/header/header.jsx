import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState , useReducer} from 'react';
import Input from '../inputs/input';
import { createPortal } from 'react-dom';
import { repositories } from '../../../api/RepositoresApi';
import {headerReducer} from '../../../reducer/reducer';


export default function Header1() {
//..........................................reducer..........................................//
  let reducerObj = {
    repose11: [],
    repose: [],
    open: false,
    ac: false,
    ac2: false,
    input: '',
    active: '',
  }

  let [state , dispatch] = useReducer(headerReducer, reducerObj);
  //..........................................queryString..........................................//
  const [search, setSearchParams] = useSearchParams();
  //..........................................variables..........................................//
  let params = useParams();
  let username = params.username;
  let ref = useRef();
  let ref2 = useRef();
  let pathanem = window.location.pathname;
  let replace = pathanem.replace('/', '');
  //..........................................apiRequest..........................................//
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target == ref.current) {
        dispatch( {
          type: 'updateOpen',
          payload:false,
        })
        
      }

      if (e.target == ref2.current) {
        dispatch( {
          type: 'updateAc',
          payload:false,
        })
        
      }
    });
  }, []);

  useEffect(() => {
    repositories(replace).then((e) => {
      let a = e.length;
      dispatch( {
        type: 'updateRepose11',
        payload: a,
      })
      dispatch( {
        type: 'updateRepose',
        payload: e,
      })
    });
  }, []);

  return (
    <>
      <div ref={ref2} className={state.ac ? 'back123' : 'none'} />
      <header>
        <div className='column'>
          <div className='flex'>
            <div className='cl'>
              <div className='left'>
                <button
                  type='button'
                  class='btn btn-outline-secondary'
                  onClick={() => {
                    dispatch( {
                      type: 'updateAc',
                      payload:true,
                    })
                    
                    document.getElementById('app').className = 'back';
                  }}>
                  <i class='bi bi-list'></i>
                </button>
                <i class='fa-brands fa-github'></i>
                <h4>{replace}</h4>
              </div>
            </div>

            <div className='f'>
              <div className='right'>
                {state.open == true
                  ? createPortal(
                      <div ref={ref} className='abBlack'>
                        <div className='wrapper'>
                          <div className='content'>
                            <Input />
                          </div>
                        </div>
                      </div>,
                      document.body
                    )
                  : null}

                <button
                  type='button'
                  class='btn btn-outline-secondary bbb'
                  onClick={() => {
                    dispatch( {
                      type: 'updateOpen',
                      payload: true,
                    })
                    
                  }}>
                  <i class='fa fa-search'></i>
                  <input
                    className='input'
                    type='search'
                    placeholder='Type / to search '
                  />
                </button>
                <button type='button' class='btn btn-outline-secondary hidd'>
                  <div className='flex-button'>
                    <h4>+</h4>
                    <i
                      style={{ fontSize: '15px' }}
                      class='bi bi-caret-down-fill'></i>
                  </div>
                </button>
                <button type='button' class='btn btn-outline-secondary hidd'>
                  <i class='bi bi-record-circle'></i>
                </button>

                <button type='button' class='btn btn-outline-secondary hidd'>
                  <i class='bi bi-arrow-down-up'></i>
                </button>
                <button type='button' class='btn btn-outline-secondary'>
                  <i class='bi bi-archive'></i>
                </button>
              </div>
            </div>
          </div>

          <div className='part2'>
            <div className='give-position'>
              <ul>
                <li className={search == '' ? 'focus' : 'noneBorder'}>
                  <Link to={`/${username}`}>
                    <button>
                      <div className='give-position'>
                        <i class='fa fa-book'></i>
                        <h6>Overview</h6>
                      </div>
                    </button>
                  </Link>
                </li>
                <li
                  className={
                    search.get('tab') == 'repositories' ? 'focus' : 'noneBorder'
                  }>
                  <Link to={`?tab=repositories`}>
                    <button className='repositories-none'>
                      <div className='give-position'>
                        <i class='fa fa-save'></i>

                        <h6>Repositories</h6>

                        {!state.repose11 ? (
                          <div className='none'>
                            <div className='absolute'>{state.repose11}</div>
                          </div>
                        ) : (
                          <div className='first'>
                            <div className='absolute'>{state.repose11}</div>
                          </div>
                        )}
                      </div>
                    </button>
                  </Link>
                </li>
                <li
                  className={
                    search.get('tab') == 'project' ? 'focus' : 'noneBorder'
                  }>
                  <Link to={'?tab=project'}>
                    <button className='noneBorder project-none'>
                      <div className='give-position'>
                        <i class='fa fa-columns'></i>
                        <h6>Project</h6>
                      </div>
                    </button>
                  </Link>
                </li>
                <li
                  className={
                    search.get('tab') == 'package' ? 'focus' : 'noneBorder'
                  }>
                  <Link to={'?tab=package'}>
                    <button className='noneBorder package-none'>
                      <div className='give-position'>
                        <i class='fa fa-dropbox'></i>
                        <h6>Package</h6>
                      </div>
                    </button>
                  </Link>
                </li>
              </ul>


              
              <div className='part2-2'>
                <button
                  type='button'
                  className='btn btn-outline-secondary'
                  onClick={() => {
                    dispatch( {
                      type: "updateActive",
                      payload: !state.active,
                    })
                  }}>
                  <i class='fa-solid fa-ellipsis'></i>
                </button>
                <div className={state.active ? 'moalagh' : 'none'}>
                  <div className='none1'>
                    <div className='flx'>
                      <i class='fa fa-star-o'></i>
                      <h6>Stars</h6>
                    </div>
                  </div>
                  <div className='none2'>
                    <Link to={'?tab=package'}>
                      <div className='flx'>
                        <i class='fa fa-dropbox'></i>
                        <h6>Package</h6>
                      </div>
                    </Link>
                  </div>
                  <div className='none3'>
                    <Link to={'?tab=project'}>
                      <div className='flx'>
                        <i class='fa fa-columns'></i>
                        <h6>Project</h6>
                      </div>
                    </Link>
                  </div>

                  <div className='none4'>
                    <Link to={'?tab=repositories'}>
                      <div className='flx'>
                        <i class='fa fa-save'></i>
                        <h6>Repositories</h6>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={state.ac ? 'hamberger active' : 'hamberger'}>
        <div className='ham1'>
          <i class='fa-brands fa-github'></i>
          <div className='relative'>
            <span
              onClick={() => {
                dispatch( {
                  type: 'updateAc',
                  payload: false,
                })
              }}>
              ⨯
            </span>
          </div>
        </div>
        <div className='ham2'>
          <div className='ham2-1 flex3'>
            <i class='fa-solid fa-house'></i>
            <Link to={`/${username}`}>
              <span>Home</span>
            </Link>
          </div>
          <div className='ham2-2 flex3'>
            <i class='fa-regular fa-circle'></i>
            <span>Issues</span>
          </div>
          <div className='ham2-3 flex3'>
            <i class='fa-solid fa-code-pull-request'></i>
            <span>Pull requests</span>
          </div>
          <div className='ham2-4 flex3'>
            <i class='fa-solid fa-book'></i>
            <span>Projects</span>
          </div>
          <div className='ham2-5 flex3'>
            <i class='fa-solid fa-envelope'></i>
            <span>Discussions</span>
          </div>
          <div className='ham2-6 flex3'>
            <i class='fa-solid fa-computer'></i>
            <span>Codespaces</span>
          </div>
        </div>
        <div className='ham3'>
          <div className='ham3-1 flex3'>
            <i class='fa-solid fa-paint-roller'></i>
            <span>Explore</span>
          </div>
          <div className='ham3-2 flex3'>
            <i class='fa-solid fa-gift'></i>
            <span>MarketPlace</span>
          </div>
        </div>
        <div className='ham4'>
          <div className='ham4-1'>
            <span>Repositories</span>
            {!state.ac2 ? (
              <i
                class='fa-solid fa-magnifying-glass'
                onClick={() => {
                  dispatch( {
                    type: 'updateAc2',
                    payload: true,
                  })
                }}></i>
            ) : (
              <input
                type='search'
                className='input'
                onChange={(e) => {
                  let a = e.target.value;
                  dispatch( {
                    type: "updateInput",
                    payload: a,
                  })
                }}
              />
            )}
          </div>
          <div className='ham4-2'>
            {state.repose.map((e) => {
              let a = [];
              a.push(e.name);
              if (e.name.includes(state.input)) {
                return (
                  <Link to={`/${username}/${a}`}>
                    <div className='p'>
                      <img src={e.owner.avatar_url} />
                      <p>
                        {username} / {a.sort()}
                      </p>
                    </div>
                  </Link>
                );
              } else if (state.input == '' || !state.input) {
                return (
                  <Link to={`/${username}/${a}`}>
                    <div className='p'>
                      <img src={e.owner.avatar_url} />
                      <p>
                        {username} / {a.sort()}
                      </p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
