// This library is causing errors, find a substitute for it - you can use this https://use-count-up.vercel.app/
// import CountUp from 'react-countup';
const Dashboard = () => {

    const cards =  [
        { Title: 'No of Registered Users', counter: 33210, icon: 'fas fa-users'},
        { Title: 'No of Vouchers Sold', counter: 4750, icon: 'fa fa-usd'},
        { Title: 'No of agents onboard', counter: 246, icon: 'fa fa-user'},
    ]

    return ( <div className="dashboard flex flex-col md:flex-row md:item-center md:space-y-0 space-y-6 text-gray-300 pl-10 py-8 bg-gray-500">
        {cards.map((card, index)=>(
            <div key={index} className="container flex gap-5">
                <div className='pt-2 gap text-2xl'><i className={card.icon}></i></div>
                
                <div>
                <h1 className='text-xl'>
                    {/* <CountUp start={0} end={card?.counter} duration={5} delay={1} /> */}
                    <p>{card?.counter}</p>
                </h1>
                <p>{card.Title}</p>
                </div>
               
               
            </div>
        ))}
    </div> );
}
 
export default Dashboard;