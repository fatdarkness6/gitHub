import { useParams, useSearchParams } from 'react-router-dom';
import { searchRepository } from '../../../api/searchApi';
import SearchHeader from '../../components/searchHeader/searchHeader';
import { useEffect, useReducer } from 'react';
import SearchFilter from '../../components/searchFilter/searchFilter';
import { searchIssuesReducer } from '../../../reducer/reducer';
import RenderSearchRepositories from './renderSearchRepositories/renderSearchRepositories';
import Pagination from '@mui/material/Pagination';
import { useLocation } from 'react-router-dom';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import RenderIssuesSearch from './renderIssuesSearch/renderIssuesSearch';

export default function SearchIssues() {
  const [searchResults, setSearchResults] = useSearchParams();
  let [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  let searchParamsType = searchResults.get('type');
  let searchParams = searchResults.get('q');
  let searchPages = searchResults.get('page');
  let lan = searchResults.get('languge');
  let stateOfIssuesPage = searchResults.get('state');

  TopBarProgress.config({
    barThickness: 5,
    barColors: {
      0: '#0076ff',
      '1.0': '#0076ff',
    },
  });

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  useEffect(() => {
    setLoading(true);
    searchRepository(searchParamsType, searchParams, searchPages).then((e) => {
      dispatch({
        type: 'updateSearchIssues',
        payload: e.items,
      });

      setLoading(false);
    });
  }, [pages]);

  useEffect(() => {
    document.title = 'Repository search result';
  }, []);

  let objReducer = {
    result: [],
  };
  const [state, dispatch] = useReducer(searchIssuesReducer, objReducer);


  return (
    <>
      {loading ? <TopBarProgress /> : null}
      <SearchHeader />
      <div className='main'>
        <div className='wrapper2'>
          <div className='flexing'>
            <SearchFilter q={searchParams} lan={state.result} />
            <div className='p2'>
              <div className='repose'>
                {state.result
                  .filter((e) => {
                    if (stateOfIssuesPage && e.state == stateOfIssuesPage) {
                      return true;
                    } else if (!stateOfIssuesPage || stateOfIssuesPage == '') {
                      return true;
                    }
                  })
                  .map((e) => {
                    return (
                      <>
                        <RenderIssuesSearch
                          time={e.created_at}
                          comments={e.comments}
                          username={e.user.login}
                          image={e.user.avatar_url}
                          body={e.body}
                          title={e.title}
                        />
                      </>
                    );
                  })}
              </div>

              <div
                onClick={() => {
                  setPages(pages + 1);
                }}
                className='pageination'>
                {state.result.length > 0 ? (
                  <Pagination
                    page={page}
                    count={100}
                    color='primary'
                    renderItem={(item) => (
                      <PaginationItem
                        component={Link}
                        to={`/search${item.page == 1 ? `?q=${searchParams}&type=${searchParamsType}&page=1` : `?q=${searchParams}&languge=${lan ? lan : ''}&type=${searchParamsType}&page=${item.page}`}`}
                        {...item}
                      />
                    )}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
