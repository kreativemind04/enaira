import enairaLogo from '../assets/enairalogo.jpg'
const Nav = () => {
    return ( <nav className="flex justify-between p-5 items-center">
        <div>
            <img src={enairaLogo} alt="enaira logo" />
        </div>

        <div className="flex justify-between align-middle items-center ml-20 w-3/5 pr-12">
            <div>
                <ul className="flex items-center">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>eNaira wallet</li>
                    <li>Blogs News</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className='flex gap-10'>
                <button className='border-2 border-lime-700 px-8 py-2' >Login</button>
                <button className=' bg-lime-700 text-white px-4'>Fund Wallet</button>
            </div>
        </div>
        
    </nav> );
}
 
export default Nav;