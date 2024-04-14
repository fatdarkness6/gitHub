import { useParams } from 'react-router-dom';
import PackageComponent from '../../components/PackageComponent/PackageComponent';
import Header1 from '../../components/header/header';
import UserProfile from '../../components/userProfile/userProfile';
import { useEffect } from 'react';
import Footer from '../../components/Footer/footer';

export default function Package() {

    useEffect(() => {
        document.title = "Your Package"
    } , [])  
  let params = useParams();
  let username = params.username;

  return (
    <>
      <Header1 />
      <div className='main'>
        <div className='wrapper'>
          <div className='flexing'>
            <UserProfile params={username} />
            <PackageComponent />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
