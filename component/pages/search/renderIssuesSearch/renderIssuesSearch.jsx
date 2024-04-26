import { useEffect } from 'react';
import Moment from 'react-moment';
import { Link, useSearchParams } from 'react-router-dom';
import '../../../../styles/style.css';

export default function RenderIssuesSearch(props) {
  return (
    <>
      <div className='father_1'>
        <div className='space'>
          
            <div className='part1-1 aasd'>
              <div className='fl a1'>
                <i class='fa-regular fa-circle-dot'></i>
                <a href='#'>{props.title}</a>
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
                <img src={props.image} alt='' />
                <span>{props.username}</span>
              </li>
              <li>
                <span>.</span>
              </li>
              <li>
                <i class="fa-solid fa-comments"></i>
                <span>{props.comments}</span>
              </li>
              <li>
                <span>.</span>
              </li>
            </ul>

            <p>
              <Moment fromNow>{props.time}</Moment>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
