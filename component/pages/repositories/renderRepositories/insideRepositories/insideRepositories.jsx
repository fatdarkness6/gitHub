import { useEffect, useReducer, useState } from 'react';
import { insideRepositories } from '../../../../../api/insideRepositoriesApi';
import { Link, useParams } from 'react-router-dom';
import { pushFilesJs } from '../../../../../api/pushFiles';
import InsideRepositoriesComponent from '../../../../components/insideRepositories/insideRepositoriesComponent';
import Header2 from '../../../../components/headerForInsiderepositories/headerForInsiderepositories';
import '../../../../../styles/style.css';
import { api } from '../../../../../api/userInfo';
import { branch } from '../../../../../api/branch';
import { tags } from '../../../../../api/tags';
import { commits } from '../../../../../api/commits';
import { commit } from '../../../../../api/commit';
import Moment from 'react-moment';
import { languages } from '../../../../../api/languege';
import { getReadME } from '../../../../../api/readMe';
import Footer from '../../../../components/Footer/footer';
import { insideRepositoriesReducer } from '../../../../../reducer/reducer';


export default function InsideRepositories() {
    //..........................................reducer...............................................//
  let reduceObj = {
    res: {},
    res2: [],
    req: {},
    isRepositoryLoaded: false,
    test: [],
    branch1: [],
    active: '',
    commitmessage: [],
    time: [],
    commitsLenghts: [],
    readMe1: '',
    popopo: [],
    ac: true,
    ac2: false,
    ac3: false,
    tik: false,
    tik2: false,
    tik3: false,
  }
  let [state , dispatch] = useReducer(insideRepositoriesReducer, reduceObj);
  //..........................................getUserFromParams......................................//
  let param = useParams();
  let username = param.username;
  let nameOfRepository = param.nameOfRepository;
  let default_branch = state.res.default_branch;

  //..........................................apiRequest..........................................//

  useEffect(() => {
    tags(username, nameOfRepository).then((e) => {
      dispatch( {
        type: 'updateTest',
        payload: e.length,
      })
    });

    insideRepositories(username, nameOfRepository).then((e) => {
      dispatch( {
        type: 'updateRes',
        payload: e,
      })
      dispatch({
        type: 'updateIsRepositoryLoaded',
        payload: true,
      })
      
    });

    api(username).then((e) => {
      dispatch( {
        type: 'updateReq',
        payload: e,
      })
      
    });

    branch(username, nameOfRepository).then((e) => {
      
      dispatch( {
        type: 'updateBranch1',
        payload: e,
      })
      
    });

    getReadME(username, nameOfRepository).then((e) => {
      dispatch( {
        type: 'updateReadMe1',
        payload: e,
      })
      
    });

    languages(username, nameOfRepository).then((e) => {
      dispatch({
        type: 'updatePopopo',
        payload: e,
      })
    });
  }, []);

  useEffect(() => {
    if (state.isRepositoryLoaded) {
      pushFilesJs(username, nameOfRepository, default_branch).then((e) => {
        let tree = e.tree;
        dispatch( {
          type: 'updateRes2',
          payload: tree,
        })
      });

      commit(username, nameOfRepository).then((e) => {
        dispatch( {
          type: 'updateCommitsLenghts',
          payload: e.length,
        })
      });

      commits(username, nameOfRepository, default_branch).then((e) => {
        dispatch( {
          type: 'updateCommitmessage',
          payload: e.commit.message,
        })
        dispatch( {
          type: 'updateTime',
          payload: e.commit.committer.date,
        })
      });
    }
  }, [state.isRepositoryLoaded]);

  function cal(e) {
    let cc = Object.values(state.popopo);
    let cc2 = Object.keys(state.popopo);

    let sum = 0;
    for (let i = 0; i < cc.length; i++) {
      sum += cc[i];
    }

    return cc2.map((key) => {
      let a = [key, state.popopo[key]];

      let cfg = (a[1] * 100) / sum;

      return (
        <div className='op'>
          <div
            className={
              a[0] == 'JavaScript'
                ? 'yellow'
                : null || a[0] == 'CSS'
                  ? 'purple'
                  : null || a[0] == 'HTML'
                    ? 'red'
                    : null || a[0] == 'TypeScript'
                      ? 'blue'
                      : null || a[0] == 'Objective-C'
                        ? 'blue'
                        : null || a[0] == 'Objective-C++'
                          ? 'midblue'
                          : null || a[0] == 'Java'
                            ? 'orange'
                            : null || a[0] == 'GLSL'
                              ? 'someBlues'
                              : null || a[0] == 'C++'
                                ? 'sorkh'
                                : null || a[0] == 'C'
                                  ? 'gray'
                                  : null || a[0] == 'Python'
                                    ? 'blue'
                                    : null || a[0] == 'Ruby'
                                      ? 'darkRed'
                                      : null
            }></div>
          <h6>
            <span>{a[0]}</span>
            <span>{cfg.toFixed(1)}%</span>
          </h6>
        </div>
      );
    });
  }
  function cal2() {
    let arry = [];

    let cc = Object.values(state.popopo);
    let cc2 = Object.keys(state.popopo);

    let sum = 0;
    for (let i = 0; i < cc.length; i++) {
      sum += cc[i];
    }

    cc2.map((key) => {
      let a = [key, state.popopo[key]];
      let b = [key, ((state.popopo[key] * 100) / sum).toFixed(1)];

      arry.push(b);
    });
    return arry.map((e) => {
      // let cxz = (e[1] / 100) * 300;
      // let qqq = cxz.toFixed(1);

      return (
        <>
          <div
            className={
              e[0] == 'JavaScript'
                ? 'yellow'
                : null || e[0] == 'CSS'
                  ? 'purple'
                  : null || e[0] == 'HTML'
                    ? 'red'
                    : null || e[0] == 'TypeScript'
                      ? 'blue'
                      : null || e[0] == 'Objective-C'
                        ? 'blue'
                        : null || e[0] == 'Objective-C++'
                          ? 'midblue'
                          : null || e[0] == 'Java'
                            ? 'orange'
                            : null || e[0] == 'GLSL'
                              ? 'someBlues'
                              : null || e[0] == 'C++'
                                ? 'sorkh'
                                : null || e[0] == 'C'
                                  ? 'gray'
                                  : null || e[0] == 'Python'
                                    ? 'blue'
                                    : null || e[0] == 'Ruby'
                                      ? 'darkRed'
                                      : null
            }
            style={{ width: `${e[1]}%`, height: '10px' }}></div>
        </>
      );
    });
  }
  cal2();

  return (
    <>
      <Header2 params={username} nameOfRepository={nameOfRepository} />

      <div className='wrapper'>
        <div className='insideRepositories'>
          <div className='showWhoIsLogin'>
            <div className='p1'>
              <img src={state.req.avatar_url} />

              <h6>{nameOfRepository}</h6>
              <p>{state.res.private == false ? 'Public' : 'private'}</p>
            </div>
            <div className='p2'>
              <button className='btn btn-secondary btn-sm '>
                <i class='fa-solid fa-thumbtack'></i>
                <span>Pin</span>
              </button>
              <button className='btn btn-secondary btn-sm'>
                <i class='fa-regular fa-eye'></i>
                <span>Watch</span>
                <div>
                  <span>{state.res.subscribers_count}</span>
                </div>
                <i class='fa-solid fa-sort-down'></i>
              </button>
              <button className='btn btn-secondary btn-sm'>
                <i class='fa-brands fa-pushed'></i>
                <span>Fork</span>
                <div>
                  <span>{state.res.forks_count}</span>
                </div>
                <i class='fa-solid fa-sort-down'></i>
              </button>
              <button className='btn btn-secondary btn-sm'>
                <i class='fa-regular fa-star'></i>
                <span>star</span>
                <div>
                  <span>{state.res.stargazers_count}</span>
                </div>
                <i class='fa-solid fa-sort-down'></i>
              </button>
            </div>

            <div id='noneBtn'>
              <div className='star* flx'>
                <i class='fa-regular fa-star'></i>
                <span>{state.res.stargazers_count}</span>
                <h6>star</h6>
              </div>
              <div className='fork* flx'>
                <i class='fa-brands fa-pushed'></i>
                <span>{state.res.forks_count}</span>
                <h6>fork</h6>
              </div>
              <div className='watch* flx'>
                <i class='fa-regular fa-eye'></i>
                <span>{state.res.subscribers_count}</span>
                <h6>watch</h6>
              </div>
              <div className='branch* flx'>
                <i class='fa-solid fa-code-branch'></i>
                <span>{state.branch1.length}</span>
                <h6 className='someColors'>Branches</h6>
              </div>
              <div className='tag* flx'>
                <i class='fa-solid fa-thumbtack'></i>
                <span>{state.test}</span>
                <h6 className='someColors'>Tags</h6>
              </div>
              <div className='Activity* flx'>
                <i class='fa-brands fa-readme'></i>
                <h6>Activity</h6>
              </div>
              <div className='state flx'>
                <i class='fa-solid fa-globe'></i>
                <h6>
                  {state.res.private == false ? 'Public' : 'private'} repository
                </h6>
              </div>
            </div>
          </div>
          <div className='container1'>
            <div className='part1'>
              <div className='header'>
                <div className='p1'>
                  <button className='btn btn-secondary btn-sm'>
                    <i class="fa-solid fa-code-branch"></i>
                    <span>{state.res.default_branch}</span>
                    <i class='fa-solid fa-sort-down'></i>
                  </button>
                  <div className='d1'>
                    <i class='fa-solid fa-code-branch'></i>
                    <span>{state.branch1.length}</span>
                    <span className='someColors'>Branches</span>
                  </div>
                  <div className='d2'>
                    <i class='fa-solid fa-thumbtack'></i>
                    <span>{state.test}</span>
                    <span className='someColors'>Tags</span>
                  </div>
                </div>

                <div className='p2'>
                  <button id='i3417'>
                    <i class='fa-solid fa-magnifying-glass'></i>
                    <input id='iii' placeholder='Go to file' />
                  </button>
                  <button id='noneButton'>
                    <span>Add file</span>
                    <i class='fa-solid fa-sort-down'></i>
                  </button>
                  <button id='blockButton'>
                    <i class='fa-solid fa-plus absolute'></i>
                  </button>
                  <div className='addres'>
                    <button
                      className='button green'
                      onClick={() => {
                        dispatch( {
                          type: "updateActive",
                          payload: !state.active
                        })
                        
                      }}>
                      <i class='fa-solid fa-code'></i>
                      <span>Code</span>
                      <i class='fa-solid fa-sort-down'></i>
                    </button>

                    <div className={state.active ? 'active' : 'notActive'}>
                      <div className='p-1'>
                        <div className='ce1'>
                          <span>Local</span>
                        </div>
                        <div className='ce2'>
                          <span>Codespaces</span>
                        </div>
                      </div>
                      <div className='p-2'>
                        <div className='pp1'>
                          <i className='fa-solid fa-terminal'></i>
                          <span>Clone</span>
                        </div>
                        <div className='pp2'>
                          <span>?</span>
                        </div>
                      </div>
                      <div className='p-3'>
                        <div className='pp1'>
                          <div className={state.ac ? 'underline' : null}>
                            <h6
                              onClick={() => {
                                dispatch({
                                  type: "updateAc",
                                  payload:true
                                })
                                dispatch({
                                  type: "updateAc2",
                                  payload:false
                                })
                                dispatch({
                                  type: "updateAc3",
                                  payload:false
                                })
                                
                              }}>
                              HTTPS
                            </h6>
                          </div>
                          <div className={state.ac2 ? 'underline' : null}>
                            <h6
                              onClick={() => {
                                dispatch( {
                                  type: "updateAc",
                                  payload:false
                                })
                                dispatch( {
                                  type: "updateAc3",
                                  payload:false
                                })
                                dispatch( {
                                  type: "updateAc2",
                                  payload:true
                                })
                              }}>
                              SSH
                            </h6>
                          </div>
                          <div className={state.ac3 ? 'underline' : null}>
                            <h6
                              onClick={() => {
                                dispatch( {
                                  type: "updateAc",
                                  payload:false
                                })
                                dispatch( {
                                  type: "updateAc2",
                                  payload:false
                                })
                                dispatch( {
                                  type: "updateAc3",
                                  payload:true
                                })
                              }}>
                              GitHub CLI
                            </h6>
                          </div>
                        </div>

                        <div className={state.ac2 || state.ac3 ? 'none' : 'pp2'}>
                          <div className='flex'>
                            <input
                              id='myInput'
                              value={`https://github.com/${username}/${nameOfRepository}.git`}
                              className='input'
                            />

                            <i
                              className={
                                state.tik ? 'fa-solid fa-check' : 'fa-solid fa-copy'
                              }
                              onClick={() => {
                                // Get the text field
                                var copyText =
                                  document.getElementById('myInput');

                                // Select the text field
                                copyText.select();
                                copyText.setSelectionRange(0, 99999); // For mobile devices

                                // Copy the text inside the text field
                                navigator.clipboard.writeText(copyText.value);
                                dispatch({
                                  type: "updateTik",
                                  payload:true
                                })
                                
                              }}
                            />
                          </div>

                          <p>Clone using the web URL.</p>
                        </div>

                        <div className={state.ac2 ? 'pp2-2' : 'none'}>
                          <div className='flex'>
                            <input
                              id='myInput2'
                              value={`git@github.com:${username}/${nameOfRepository}.git`}
                              className='input'
                            />
                            <i
                              className={
                                state.tik2 ? 'fa-solid fa-check' : 'fa-solid fa-copy'
                              }
                              onClick={() => {
                                // Get the text field
                                var copyText =
                                  document.getElementById('myInput2');

                                // Select the text field
                                copyText.select();
                                copyText.setSelectionRange(0, 99999); // For mobile devices

                                // Copy the text inside the text field
                                navigator.clipboard.writeText(copyText.value);
                                dispatch({
                                  type: "updateTik2",
                                  payload:true
                                })
                               
                              }}
                            />
                          </div>

                          <p>Use a password-protected SSH key.</p>
                        </div>

                        <div className={state.ac3 ? 'pp2-3' : 'none'}>
                          <div className='flex'>
                            <input
                              id='myInput3'
                              value={`gh repo clone ${username}/${nameOfRepository}`}
                              className='input'
                            />
                            <i
                              className={
                                state.tik3 ? 'fa-solid fa-check' : 'fa-solid fa-copy'
                              }
                              onClick={() => {
                                // Get the text field
                                var copyText =
                                  document.getElementById('myInput3');

                                // Select the text field
                                copyText.select();
                                copyText.setSelectionRange(0, 99999); // For mobile devices

                                // Copy the text inside the text field
                                navigator.clipboard.writeText(copyText.value);
                                dispatch({
                                  type: "updateTik3",
                                  payload:true
                                })
                                
                              }}
                            />
                          </div>

                          <p>Work fast with our official CLI.</p>
                        </div>
                      </div>
                      <div className='p-44'>
                        <div className='popopo'>
                          <i className='fa-solid fa-download'></i>
                          <h6>Open with GitHub Desktop</h6>
                        </div>
                      </div>
                      <div className='p-55'>
                        <div className='popopo'>
                          <i className='fa-solid fa-file-zipper'></i>
                          <Link
                            to={`https://github.com/${username}/${nameOfRepository}/archive/refs/heads/${state.res.default_branch}.zip`}>
                            <h6>Download ZIP</h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* https://developer.mozilla.org/en-US/docs/Web/API/URL/URL */}

              <div className='main-1'>
                <div className='p-11'>
                  <div className='p-e'>
                    <img src={state.req.avatar_url} />
                    <span>{state.req.login}</span>
                    <span className='nn'>{state.commitmessage}</span>
                    <span className='time' style={{ color: '#848d97', fontSize: '13px' }}>
                      <Moment toNow>{state.time}</Moment>
                    </span>
                  </div>
                  <div className='p-e2'>
                    <span className='momen' style={{ color: '#848d97', fontSize: '13px' }}>
                      <Moment toNow>{state.time}</Moment>
                    </span>
                    <div style={{ fontSize: '13px' }} className='peyvand'>
                      <i class='fa-regular fa-clock'></i>
                      <span> {state.commitsLenghts} Commits</span>
                    </div>
                  </div>
                </div>
                <div className='p-22'>
                  {state.res2.map((e) => {
                    return (
                      <InsideRepositoriesComponent
                        time={state.time}
                        commitmessage={state.commitmessage}
                        path={e.path}
                      />
                    );
                  })}
                </div>
              </div>
              <div className='readMe'>
                <h5>{state.readMe1 == '404: Not Found' ? 'Empty' : state.readMe1}</h5>
              </div>
            </div>

            <div className='part2 i22'>
              <div className='pr1'>
                <div className='p1 '>
                  <h6>About</h6>
                </div>
                <div className='p2 '>
                  <p>No description, website, or topics provided.</p>
                </div>
                <div className='p3'>
                  <div className='pqq1 pqq'>
                    <a href='#'>
                      <i class='fa-brands fa-readme'></i>
                      <span>Readme</span>
                    </a>
                  </div>
                  <div className='pqq2 pqq'>
                    <a href='#'>
                      <i class='fa-solid fa-chart-line'></i>
                      <span>Activity</span>
                    </a>
                  </div>
                  <div className='pqq3 pqq'>
                    <a href='#'>
                      <i class='fa-regular fa-star'></i>
                      <span>{state.res.stargazers_count} stars</span>
                    </a>
                  </div>
                  <div className='pqq4 pqq'>
                    <a href='#'>
                      <i class='fa-regular fa-eye'></i>
                      <span>{state.res.subscribers_count} Watch</span>
                    </a>
                  </div>
                  <div className='pqq5 pqq'>
                    <a href='#'>
                      <i class='fa-solid fa-code-pull-request'></i>
                      <span>{state.res.forks_count} Fork</span>
                    </a>
                  </div>
                  <div className='pqq6 pqq'>
                    <a href='#'>
                      <span>Report repository</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='pr2'>
                <a href='#'>
                  <h6>Releases</h6>
                </a>
                <span>No releases published</span>
              </div>
              <div className='pr3'>
                <a href='#'>
                  <h6>Packages</h6>
                </a>
                <span>No packages published</span>
              </div>
              <div className='pr4'>
                <h6>Languages</h6>
                <div className='pop1'>
                  <div className='kaftar1'>{cal2()}</div>
                  <div className='kaftar2'>{cal()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
