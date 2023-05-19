import iphone from '../assets/image2.png'
const Banner = () => {
    return ( <div className="banner bg-gray-600 py-10 px-10 flex justify-between">
        <div className="banner-text py-40 text-white text-3xl font-bold">
        <h1>Introducing <span className="text-lime-600" >eNaira</span></h1>
        <h1>The Future Digital Currency</h1>
        <h3 className="text-sm mt-4">Experience instant, secure, and borderless transactions with our digital naira solution.</h3>
        <button className="text-sm p-2 mt-8 bg-lime-800">Get Started <i className="fa fa-long-arrow-right"></i></button>
        </div>

        <div className="banner-image h-96 w-1/4 pr-20 mt-10">
            <img src={iphone} alt="" />
        </div>
    </div> );
}
 
export default Banner;