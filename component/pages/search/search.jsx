import { useParams, useSearchParams } from 'react-router-dom';
import { searchRepository } from '../../../api/searchApi';
import SearchHeader from '../../components/searchHeader/searchHeader';
import { useEffect, useReducer } from 'react';
import SearchFilter from '../../components/searchFilter/searchFilter';
import { searchLanguagesReducer } from '../../../reducer/reducer';
import RenderSearchRepositories from './renderSearchRepositories/renderSearchRepositories';

export default function Search() {
  const [searchResults, setSearchResults] = useSearchParams();

  let searchParamsType = searchResults.get('type');
  let searchParams = searchResults.get('q');

  useEffect(() => {
    searchRepository(searchParamsType, searchParams).then((e) => {
      dispatch({
        type: 'updateSearchLanguages',
        payload: e.items,
      });
    });
    document.title = 'Repository search result';
  }, []);
  let objReducer = {
    result: [],
  };

  const [state, dispatch] = useReducer(searchLanguagesReducer, objReducer);

  return (
    <>
      <SearchHeader />
      <div className="main">
      <div className='wrapper2'>

      <div className='flexing'>
        <SearchFilter lan={state.result} />
        <div className='p2'>
          <div className='repose'>
            { state.result.map((e) => {
              if(searchParamsType == "repositories") {
                return <RenderSearchRepositories img = {e.deployments_url} updated_at = {e.updated_at} language = {e.language} params={e.full_name} />;
              }
              console.log(e);
            })}
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
