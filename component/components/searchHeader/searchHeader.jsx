import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState , useReducer} from 'react';
import Input from '../inputs/input';
import { createPortal } from 'react-dom';
import { repositories } from '../../../api/RepositoresApi';
import {headerReducer} from '../../../reducer/reducer';
import Input2 from '../inputs2/input2';


export default function SearchHeader() {
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
  let query = search.get('q');
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
      <div className='header2'>
        <div className='column'>
          <div className='flex2'>
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
              </div>
            </div>
                  <div className='big-input'>
                  <button
                  id='ddd'
                  type='button'
                  class='btn btn-outline-secondary bbb2'
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
                    placeholder= {query}
                  />
                </button>
                  </div>
            <div className='f'>
                
              <div className='right'>
              {state.open == true
                  ? createPortal(
                      <div ref={ref} className='abBlack'>
                        <div className='wrapper'>
                          <div className='content'>
                            <Input2/>
                          </div>
                        </div>
                      </div>,
                      document.body
                    )
                  : null}
                
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

         
        </div>
      </div>

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
