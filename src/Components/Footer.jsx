import logo from '../assets/enairalogo.jpg'
const Footer = () => {
    return ( <div className="flex">
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <i className='fa fa-facebook-official'></i>
                <i className='fa fa-twitter'></i>
                <i className='fa fa-instagram'></i>
                <i className='fa fa-envelope'></i>

            </div>
        </div>

        <div>
            <h2>Quick Links</h2>
            <ul>
                <link rel="stylesheet" href="#" />Home
            </ul>

        </div>
    </div> );
}
 
export default Footer;