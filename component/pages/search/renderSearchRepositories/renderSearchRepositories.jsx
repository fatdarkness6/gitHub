import { useEffect } from 'react';
import Moment from 'react-moment';
import { Link, useSearchParams } from 'react-router-dom';
import '../../../../styles/style.css';

export default function RenderSearchRepositories(props) {
  return (
    <>
      <div className='father'>
        <div className='space'>
          <Link to={`/${props.params}`}>
            <div className='part1-1 aasd'>
              <div className='fl a1'>
                <img src={props.image} alt='' />
                <a href='#'>{props.params}</a>
              </div>
              <div className='discription'>
                <span>{props.discription}</span>
              </div>
            </div>
          </Link>
          <div className='part2-2'>
            <button type='button' class='btn btn1  btn-secondary btn-sm'>
              <div className='p-p1'>
                <i class='fa fa-star-o'></i>
                <p>Star</p>
              </div>
              <div className='p-p2'>
                <button type='button' class='btn btn-secondary btn-sm'>
                  <i class='fa fa-sort-down'></i>
                </button>
              </div>
            </button>
          </div>
        </div>
        <div className='type'>
          <div className='part1-1'>
            <div
              className={
                props.language == 'CSS'
                  ? 'purple'
                  : null || props.language == 'JavaScript'
                    ? 'yellow'
                    : null || props.language == 'TypeScript'
                      ? 'blue'
                      : null || props.language == 'HTML'
                        ? 'red'
                        : null || props.language == 'Objective-C'
                          ? 'blueLight'
                          : null || props.language == 'C'
                            ? 'gray'
                            : null || props.language == 'Java'
                              ? 'orange'
                              : null || props.language == 'C#'
                                ? 'darkgreen'
                                : null || props.language == 'C++'
                                  ? 'pink'
                                  : null || props.language == 'Dart'
                                    ? 'blueLight'
                                    : null ||
                                        props.language == 'Jupyter Notebook'
                                      ? 'orange'
                                      : null || props.language == 'Python'
                                        ? 'darkBlue'
                                        : null || props.language == 'Shell'
                                          ? 'lightGreen'
                                          : null || props.language == "PHP" ? "darkPurple" : null || props.language == "Dockerfile" ? "gray" : null || props.language == "Visual Basic .NET"? "pinkPurple" : null || props.language == "Rich Text Format" ? "darkOrange": null || props.language == "Haskell"? "darkPurple" : null || props.language == "Stata" ? "darkBlue" : null || props.language == "Go" ? "blueLight" : null|| props.language == "Vue"? "lightGreen" : null || props.language == "Classic ASP" ? "purple"  : null || props.language == "ASP.NET" ? "pupurple":null  || props.language == "Ruby" ? "darkRed" :null ||  !props.language
                                            ? 'none'
                                            : null
              }></div>
            <p className={!props.language ? 'none' : null}>{props.language}</p>
            <ul className='baham'>
              <li>
                <i class='fa-regular fa-star'></i>
                <span>{props.star}</span>
              </li>
            </ul>

            <p>
              <Moment fromNow>{props.updated_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
