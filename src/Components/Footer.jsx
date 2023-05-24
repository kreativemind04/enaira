import { Link } from 'react-router-dom';
import logo from '../assets/enairalogobg.png'
import { useForm } from 'react-hook-form';
const Footer = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({})

    return ( <div className=" footer flex justify-between bg-gray-600 p-5 text-white">
        <div>
            <div className='bg-white mt-10'>
                <img src={logo} alt="" />
            </div>
            <div className='pt-10 flex justify-evenly text-xl'>
                <i className='fa fa-facebook-official'></i>
                <i className='fa fa-twitter'></i>
                <i className='fa fa-instagram'></i>
                <i className='fa fa-envelope'></i>

            </div>
        </div>

        <div>
            <h2>Quick Links</h2>
            <ul className="">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='#'>How it works</Link></li>
                    <li><Link to='#'>FAQs</Link></li>
                    <li><Link to='#about'>About Us</Link></li>
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

            <label>Sign up for the latest news and updates</label>
        <input type="email" name='email' placeholder='Your email' {...register('email', {
             required: true, 
             pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}/>

        </div>
    </div> );
}
 
export default Footer;