import iphone from '../assets/iphone13.PNG'
const Download = () => {
    return ( <div className=" download flex justify-center border border-black">
        <div className="p-20 text-sm">
            <h2 className="text-xl font-semibold py-5">Download Our Mobile App And Start Enjoying Smooth And Easy Transactions</h2>
            <p>Get our mobile on playstore or apple store and <br /> start enjoying smooth eNaira transactions</p>
            <div className="flex flex-col md:flex-row gap-10 pt-10">
            <a className="border border-green-600 rounded-md text-sm md:text-xs px-4 py-2 md:py-4" href="https://speed.page.link/vAS1">Download on Google Playstore</a>
            <a className="border border-green-600 rounded-md bg-green-600 text-white text-sm px-4 py-4" href="https://speed.page.link/vAS1">Download on Apple Store</a>
            </div>
        </div>
        <div className=" hidden md:block h-96 w-1/4">
            <img src={iphone} alt="" />
        </div>
    </div> );
}
 
export default Download;