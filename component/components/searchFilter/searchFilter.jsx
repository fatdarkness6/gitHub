import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SearchFilter(props) {
  function updateType(update) {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set('type', update);
    window.location.search = searchParams.toString();
  }
  let lan = props.lan
  let arry = []
  let newArray = []
  return (
    <>
      <div className='searchFilter'>
        <div className='filterBy'>
          <h4>Filter by</h4>
        </div>
        <div className='filterOption'>
          <ul>
            <li
              onClick={() => {
                updateType('code');
              }}>
              <i class='fa-solid fa-code'></i>
              <h5>Code</h5>
            </li>
            <li
              onClick={() => {
                updateType('repositories');
              }}>
              <i class='fa-solid fa-money-bill-transfer'></i>
              <h5>Repositories</h5>
            </li>
            <li
              onClick={() => {
                updateType('issues');
              }}>
              <i class='fa-solid fa-bullseye'></i>
              <h5>Issues</h5>
            </li>
            <li
              onClick={() => {
                updateType('pull_requests');
              }}>
              <i class='fa-solid fa-code-pull-request'></i>
              <h5>Pull Request</h5>
            </li>
            <li
              onClick={() => {
                updateType('users');
              }}>
              <i class='fa-regular fa-user'></i>
              <h5>Users</h5>
            </li>
            <li
              onClick={() => {
                updateType("commits");
              }}>
              <i class='fa-solid fa-code-commit'></i>
              <h5>Commits</h5>
            </li>
            <li
              onClick={() => {
                updateType("topics");
              }}>
              <i class='fa-solid fa-snowflake'></i>
              <h5>Toghics</h5>
            </li>
          </ul>
        </div>
        <div className='filterLanguages'>
          <span>language</span>
        {lan.map((e) => {
          arry.push(e.language)
        })
        }
        {arry.forEach((e) => {
          if(!newArray.includes(e)) {
            newArray.push(e)
          }
          
        })}
        {newArray.filter((e) => {
          return e !== null && e !== undefined && e !== "";
          
        }).map((e) => {
          return (
            <>
              <div onClick={() => {let searchParams = new URLSearchParams(window.location.search);searchParams.set('languge', e);window.location.search = searchParams.toString();}} className="showLan">
                
                <h6>{e}</h6>
              </div>
            </>
          )
        })}
        </div>
      </div>
    </>
  );
}
