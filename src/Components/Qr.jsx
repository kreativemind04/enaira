import code from '../assets/qr-code.png'
import phone from '../assets/iphone.PNG'
const Qr = () => {
    return ( <div className=" bg-black qr flex justify-between p-20">
        <div>
            <h2 className='font-bold text-white text-xl'>Download the app or scan the QR code now to get started.</h2>
            <div className='h-96 '>
                <img src={code} alt="" />
            </div>
        </div>
        <div className='hidden md:visible h-96 w-1/4 pr-10'>
            <img src={phone} alt="" />
        </div>
    </div> );
}
 
export default Qr;