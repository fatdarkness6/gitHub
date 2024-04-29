import { useEffect } from 'react';
import Moment from 'react-moment';
import { Link, useSearchParams } from 'react-router-dom';
import '../../../../styles/style.css';

export default function RenderCommitsSearch(props) {
  return (
    <>
      <div className='father_1'>
        <div className='space'>
          <div className='part1-1 aasd'>
            <div className='nameOfRepository'>
              <Link to={`/${props.fullName}`}>
                <span>{props.fullName}</span>
              </Link>
            </div>
            <div className='fl a1'>
            <div className='mahdod'>

              <a href='#'>{props.massage}</a>
            </div>
            </div>
            <div className='discription'>
              <span>{props.body}</span>
            </div>
          </div>
        </div>
        <div className='type'>
          <div className='part1-1'>
            <ul className='baham'>
              <li>
                {props.name == props.commiterLogin ? (
                  <a className='connect'>
                    <img src={props.image} alt='' />
                    <span>
                      {props.name} committed on{' '}
                      <Moment fromNow>{props.time}</Moment>{' '}
                    </span>
                  </a>
                ) : (
                  <a className='connect'>
                    <img src={props.image} alt='' />
                    <span>{props.name} authored and</span>
                    <img src={props.commiterImage} alt='' />
                    <span>
                      {props.commiterLogin} committed{' '}
                      <Moment fromNow>{props.time}</Moment>
                    </span>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
