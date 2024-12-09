import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-white text-black pt-10 pr-16 pl-24 md:py-20 mt-20 w-[1440px] h-[505px] border-t-2">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">

          {/* Column 2 */}
          <div className="leading-10 text-sm font-light">
            <h2 className="text-3xl font-bold mb-6">Funiro.</h2>
            <address>
              400 University Drive suite, <br />
              Caral Globles. <br />
             
              <p >
                123-456-789
              </p>
            </address>
          </div>

          {/* Column 3 */}
          <div className="leading-9 text-sm font-light">
            <h2 className="text-xl font-semibold mb-6 text-gray-400">Link</h2>
            <ul className='font-bold md:text-lg space-y-4'>
              
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              
            </ul>
          </div>

          {/* Column 4 */}
          <div className="leading-10 text-sm font-light">
            <h2 className="text-xl font-semibold mb-6 text-gray-400">Help</h2>
            <ul className='font-bold md:text-lg space-y-4'>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
            
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-gray-400">New Sletter</h2>
            <div className='flex font-semibold space-x-4'>
            <p><input type="text" placeholder='Enter your email address' className='border-b-2'/></p>
            <a className='border-b-2'>Subcribe</a>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
