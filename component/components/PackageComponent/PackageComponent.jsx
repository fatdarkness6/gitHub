import Image from "./output-removebg-preview.png"

export default function PackageComponent() {
  return (
    <div className='package1'>
      <div className='part1-package'>
        <img src={Image} />
        <h3>Get started with GitHub Packages</h3>
        <h6>
          Safely publish packages, store your packages alongside your code, and
          share your packages privately with your team.
        </h6>
      </div>
      <div className='part2-package'>
        <h5>Choose a registry</h5>
        <div className='registry-options'>
          <div className="flx1">
          <div className='part1-registry'>

            
            <div className='border-option'>
              <div className='flx'>
                <i class='fa-solid fa-water'></i>
                <h4>Docker</h4>
              </div>
              <p>
                A software platform used for building applications based on
                containers — small and lightweight execution environments.
              </p>
              <button>Learn more</button>
            </div>

            

            <div className='border-option'>
              <div className='flx'>
                <i class='fa-solid fa-pencil'></i>
                <h4>Apache Maven</h4>
              </div>
              <p>
                A default package manager used for the Java programming language
                and the Java runtime environment.
              </p>
              <button>Learn more</button>
            </div>
            
            


          </div>


















          <div className='part2-registry'>



            
          <div className='border-option'>
              <div className='flx'>
                <i class='fa-regular fa-gem'></i>
                <h4>RubyGems</h4>
              </div>
              <p>
                A standard format for distributing Ruby programs and libraries
                used for the Ruby programming language.
              </p>
              <button>Learn more</button>
            </div>


            
          




            <div className='border-option'>
              <div className='flx'>
                <i class='fa-solid fa-cube'></i>
                <h4>NuGet</h4>
              </div>
              <p>
                A free and open source package manager used for the Microsoft
                development platforms including .NET.
              </p>
              <button>Learn more</button>
            </div>


            

          </div>
          </div>




          <div className='part3-registry'>
          <div className='border-option'>
              <div className='flx'>
                <i class='fa-brands fa-npm'></i>
                <h4>npm</h4>
              </div>
              <p>
                A package manager for JavaScript, included with Node.js. npm
                makes it easy for developers to share and reuse code.
              </p>
              <button>Learn more</button>
            </div>



            <div className='border-option'>
              <div className='flx'>
                <i class='fa-solid fa-church'></i>
                <h4>Containers</h4>
              </div>
              <p>
                A single place for your team to manage Docker images and decide
                who can see and access your images.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
