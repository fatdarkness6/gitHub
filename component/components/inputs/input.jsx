import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Input() {
  const [set, setSet] = useState('');

  let pathanem = window.location.pathname;

  let replace = pathanem.replace('/', '');

  const navigate = useNavigate();

  return (
    <>
      <div className='background'>
        <div className='part1'>
          <form
            className='f'
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search?q=${set}&type=repositories`);
            }}>
            <button type='button' class='btn btn-outline-secondary bbb'>
              <i class='fa-solid fa-magnifying-glass'></i>

              <input
                type='search'
                onChange={(e) => {
                  let a = e.target.value;
                  setSet(a);
                }}
              />
            </button>
          </form>
        </div>
        {set == '' ? null : (
          <div className='part2'>
            <i class='fa-solid fa-magnifying-glass'></i>
            <p>{set}</p>
          </div>
        )}
      </div>
    </>
  );
}
