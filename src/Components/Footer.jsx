import { Link } from 'react-router-dom';
import logo from '../assets/enairalogobg.png'
import { useForm } from 'react-hook-form';
const Footer = () => {

    const {
        register,
        handleSubmit,
    } = useForm({})

    return ( <div className=" footer flex flex-col lg:flex-row justify-between bg-gray-600 p-5 text-white">
        <div>
            <div className='bg-white mt-10'>
                <img src={logo} alt="" />
            </div>
            <div className='pt-10 flex justify-evenly text-xl'>
                <i className='fa fa-facebook-official'></i>
                <i className='fa fa-twitter'></i>
                <a href="https://twitter.com/BullnetE" target='blank'><i className='fa fa-twitter'></i></a>
                <a href="https://www.instagram.com/enairabybullnet/" target='blank'><i className='fa fa-instagram'></i></a>
                <i className='fa fa-envelope'></i>

            </div>
        </div>

        <div>
            <h2>Quick Links</h2>
            <ul className="">
            <li><a href="#home">Home</a></li>
                    <li><Link to='#'>How it works</Link></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href='#about'>About Us</a></li>
                    <li><Link to='/'>Privacy Policy</Link></li>
                </ul>
        </div>

        <div>
            <h2>eNaira</h2>
            <ul className="">
                    <li><Link to='#'>Fund Wallet</Link></li>
                    <li><Link to='#'>Transaction History</Link></li>
                    <li><Link to='#'>Transaction Rate</Link></li>
                    <li><Link to='#'>Conversion Rate</Link></li>
                    <li><Link to='#'>eNaira Value</Link></li>
                </ul>
        </div>

        <div>
            <h2>Newsletter</h2>
            {/* <p>Sign up for the latest news and updates</p> */}

            <form id='subscribe' onSubmit={handleSubmit()}>
                <label>Sign up for the latest news and updates</label>
                <input className='border border-red-900 w-full' type="email" name='email' placeholder='Your email' {...register('email', {
                    required: true, 
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}/>
            </form>
            

        </div>
    </div> );
}
 
export default Footer;