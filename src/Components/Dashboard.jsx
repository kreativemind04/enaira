// This library is causing errors, find a substitute for it - you can use this https://use-count-up.vercel.app/
// import CountUp from 'react-countup';
import CountUpCards from "./CountUpCards";
const Dashboard = () => {

    const cards =  [
        { Title: 'No of Registered Users', counter: 33210, icon: 'fas fa-users'},
        { Title: 'No of Vouchers Sold', counter: 4750, icon: 'fa fa-usd'},
        { Title: 'No of agents onboard', counter: 246, icon: 'fa fa-user'},
    ]


    return ( <div className="dashboard flex flex-col md:flex-row md:item-center md:space-y-0 space-y-6 text-gray-300 pl-10 py-8 bg-gray-500">
        {cards.map((card, index)=>(
            <div key={index} className="container flex gap-5 items-center">
                <div className='pt-2 gap text-2xl'><i className={card.icon}></i></div>
                <CountUpCards title={card.Title} end={card.counter}/>
               
               
            </div>
        ))}
    </div> );
}
 
export default Dashboard;