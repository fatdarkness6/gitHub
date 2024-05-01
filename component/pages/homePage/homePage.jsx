
import '../../../styles/style.css';
import { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function HomePage() {
  useSelector((state) => console.log(state.profile.value));

  
  const [use, setUse] = useState('');

  let navigate = useNavigate();

  let ref = useRef();


  useEffect(() => {
    Aos.init({ duration: 1000 });
    document.title = 'homePage';
    
  }, []);
  return (
    <div className='header-1'>
      <div className='wallpaper'>
        <div className='pop'>
          <div className='wrapper'>
            <div className='pop1'>
              <div className='padding'>
                <div className='pop1-1'>
                  <h1 data-aos='zoom-out-left' data-aos-delay='300'>
                    Welcome to Arsams website
                  </h1>
                </div>
                <div className='pop2-1'>
                  <h2 data-aos-delay='500' data-aos='zoom-out-up'>
                    This site is taken from the GitHub site and is still under
                    development
                  </h2>
                </div>
              </div>
            </div>
            <div className='pop2'>
              <div className='padding'>
                <div className='pop1-1'>
                  <h1
                    data-aos-duration='2500'
                    data-aos-delay='2500'
                    data-aos='fade-up'>
                    What is github ?
                  </h1>
                  <h2
                    data-aos-duration='2000'
                    data-aos-delay='3000'
                    data-aos='fade-up'>
                    Stay with us to tell you
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  className='textPart'>
          <div className='wrapper'>
            <div className='padding'>
              <h1 data-aos='fade-down-left' data-aos-duration='3000'>
                <Typewriter
                  typeSpeed={80}
                  cursor={true}
                  words={[
                    'GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.',
                  ]}
                />
              </h1>
              <div className='flx'>

              
              <h2
                data-aos='flip-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='2000'>
                I hope you understand what github is
              </h2>
              <button onClick={() => {
                ref.current.scrollIntoView({ behavior:'smooth' });
              }} >

              <i class="fa-solid fa-chevron-down"></i>
              <span>Click for enter the ID</span>
              </button>
              </div>
            </div>
          </div>
        </div>
        <div 
        ref={ref}
          // data-aos="flip-left"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="200"
          className='pop3'>
          <div className='wrapper'>
            <div className='padding'>
              <h1 
                data-aos-duration='2500'
                data-aos='fade-up'>
                If you want to know more, enter any GitHub ID you want in this
                input, you must pay attention to enter it carefully.
              </h1>
              <form
                type='form'
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate(`/${use}`);
                  localStorage.setItem('use', use);
                }}>
                <input
                  data-aos='fade-right'
                  data-aos-offset='200'
                  data-aos-easing='ease-in-sine'
                  data-aos-delay='50'
                  data-aos-duration='1000'
                  id='search'
                  type='search'
                  placeholder='Enter your ID'
                  onChange={(e) => {
                    let val = e.target.value;
                    setUse(val);
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
