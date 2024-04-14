import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Header1 from '../../components/header/header';
import UserProfile from '../../components/userProfile/userProfile';
import PinAndEse from '../../components/pinsAndEse/pinsAndEse';
import { api } from '../../../api/userInfo';
import Loading from '../../components/loading/loading';
import Errors from '../../components/errors/errors';
import Footer from '../../components/Footer/footer';
import { useReducer } from 'react';
import { reducer } from '../../../reducer/reducer';

export default function Profile() {
  //..........................................getUserFromParams......................................//
  const param = useParams();
  let getUserFromParams2 = param.username;
  //..........................................reducer...............................................//
  let reduceObj = {
    name: '',
    loading: true,
    matn: false,
  };
  const [state, dispatch] = useReducer(reducer, reduceObj);
  //..........................................apiRequest..........................................//
  useEffect(() => {
    api(getUserFromParams2)
      .then((e) => {
        dispatch({
          type: 'updateName',
          payload: e,
        });
      })
      .catch(() => {
        dispatch({
          type: 'updateMatn',
          payload: true,
        });
        dispatch({
          type: 'updateLoading',
          payload: false,
        });
      });
  }, []);
  document.title = state.name
    ? `${getUserFromParams2} (${state.name.name})`
    : `${getUserFromParams2}`;
  useEffect(() => {
    if (state.name) {
      dispatch({
        type: 'updateLoading',
        payload: false,
      });
    }
  }, [state.name]);
  //..............................................htmls.................................................//
  return (
    <>
      <Header1 params={getUserFromParams2} />
      {state.loading ? (
        <div className='center'>
          <Loading />
        </div>
      ) : (
        <div className='main'>
          <div className='wrapper'>
            {state.matn ? (
              <>
                <div className='flx'>
                  <Errors />
                  <div className='text'>
                    <h1>Your (username) is Invalid </h1>
                    <h1>or</h1>
                    <h1>Your net is (Bad)</h1>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='flexing'>
                  <UserProfile params={getUserFromParams2} />
                  <PinAndEse params={getUserFromParams2} />
                </div>
              </>
            )}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
