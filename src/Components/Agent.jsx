import bullnet from '../assets/enaira.jpg'
const Agents = () => {
    return ( 
        <div className="agents">
            <h2 className="font-bold text-2xl text-center my-3">Become an eNaira Agent</h2>
            <div className="flex">
                <div className='w-1/2 p-20 h-auto'>
                    <img src={bullnet} alt="" />
                </div>
               
                <div className='pt-20'>
                    <h3 className="font-bold pb-5">Looking for how to make extra cash without stress?</h3>
                    <h4>As an eNaira agent, you will;</h4>
                    <p><i className="fa fa-check-square pr-2" ></i>Earn passive income while you focus on your career</p>
                    <p> <i className="fa fa-check-square pr-2"></i>Create business for yourself without the stress of getting POS</p>
                    <p><i className="fa fa-check-square pr-2" ></i>Make transactions without hidden costs or charges</p>
                    <p><i className="fa fa-check-square pr-2" ></i>Make transactions without fear of dispensing error</p>
                    <button className='border-2 border-gray-600 text-xs px-3 py-2 mt-40'>Click here to become an agent</button>
                </div>
            </div>
        </div>
     );
}
 
export default Agents;