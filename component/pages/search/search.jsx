import { useParams, useSearchParams } from 'react-router-dom';
import { searchRepository } from '../../../api/searchApi';
import SearchHeader from '../../components/searchHeader/searchHeader';
import { useEffect, useReducer } from 'react';
import SearchFilter from '../../components/searchFilter/searchFilter';
import { searchLanguagesReducer } from '../../../reducer/reducer';
import RenderSearchRepositories from './renderSearchRepositories/renderSearchRepositories';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useLocation } from 'react-router-dom';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Search() {
  const [searchResults, setSearchResults] = useSearchParams();
  const [pages, setPages] = useState(1);

  let searchParamsType = searchResults.get('type');
  let searchParams = searchResults.get('q');
  let searchPages = searchResults.get('page');
  let lan = searchResults.get('languge');

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  useEffect(() => {
    searchRepository(searchParamsType, searchParams , searchPages).then((e) => {
      dispatch({
        type: 'updateSearchLanguages',
        payload: e.items,
      });
      console.log(e)
    });
    
  }, [pages]);

  useEffect(() => {
    document.title = 'Repository search result';
  } , [])


  let objReducer = {
    result: [],
  };

  const [state, dispatch] = useReducer(searchLanguagesReducer, objReducer);

  return (
    <>
      <SearchHeader />
      <div className='main'>
        <div className='wrapper2'>
          <div className='flexing'>
            <SearchFilter lan={state.result} />
            <div className='p2'>
              <div className='repose'>
                {console.log("")}
                {state.result.filter((e) => {
                  if(e.language == lan ) {
                    return true
                  }else if (!lan || lan == '') {
                    return true;
                  }
                  
                }).map((e) => {
                  if (searchParamsType == 'repositories') {
                    return (
                      <RenderSearchRepositories
                        updated_at={e.updated_at}
                        language={e.language}
                        params={e.full_name}
                      />
                    );
                  }
                })}
              </div>
              <div  className='pageination'>
                {state.result.length > 0  ?<Pagination
                  page={page}
                  count={100}
                  color="primary"
                  onClick={() => {
                    setPages()
                  }}
                  renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      
                      to={`/search${item.page == 1 ?  `?q=${searchParams}&type=${searchParamsType}&page=1` : `?q=${searchParams}&type=${searchParamsType}&page=${item.page}`}`}
                      {...item}
                    />
                  )}
                /> : null }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
