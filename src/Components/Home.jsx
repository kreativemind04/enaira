import { useState } from "react";

const Home = () => {
    const cards =  [
        { Title: 'Unified Payment System', body: 'Customers can now move money from their bank account to their eNaira wallet with ease.', img: 'fa fa-phone',},
        { Title: 'Contactless Payment', body: 'Customers can make in-store payment using their eNaira wallet by scanning QR codes.',img: 'fa fa-money'},
        { Title: 'Peer-to-Peer Payment', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap',img: 'fa fa-thumbs-up'},
        { Title: 'Bank Account Management', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap',img: 'fa fa-university',},
        { Title: 'Financial Institutions Transactions', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap',img: 'fa fa-thumbs-up',},
        { Title: 'Verifying Payments', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap',img: 'fa fa-money',},
    ]

    const [selectedElementIndex, setSelectedElementIndex] = useState(null)


    const cardsB =  [
        { Title: '24/7 Support', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap', id: 1,},
        { Title: 'No Long Queue', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap', id: 2,},
        { Title: 'Quick and Easy Setup', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap',id: 3,},
        { Title: 'No Network Issue', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap',id: 4,},
        { Title: 'Remote Access to Funds', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap',id: 5,},
        { Title: 'Fast Transactions', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap',id: 6,},
        { Title: 'Funding with Vouchers', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap',id: 7,},
        { Title: 'Strong Security', body: 'Organizations and individuals are seeking fast, safe, easy, and cheap. Organizations and individuals are seeking fast, safe, easy, and cheap',id: 8,},
    ]

   
    return ( <section>
        <div className="about-e p-10" id="about">
            <h2 className="text-3xl border-b-2">About eNaira</h2>
            <p>eNaira is a Central Bank of Nigeria-issued digital currency that provides a unique form of money denominated in Naira. eNaira serves as both a medium of exchange and a store of value, offering better payment prospects in retail transactions when compared to cash payments. eNaira has an exclusive operational structure that is both remarkable and nothing like other forms of central bank money.</p>
            <p>There are several benefits from a central bank-issued digital currency in Nigeria, and this cuts across different sectors of, and concerns of the economy. eNaira is an electronic version of the local paper naira currency, equal in value and issued by the Central Bank Nigeria. It functions as a safe and efficient alternative means of payment.</p>
            <p>Organizations and individuals are seeking fast, safe, easy, and cheap means of payment. eNaira was minted to meet these pressing needs.</p>
        </div>
        <section>
            <div className="flex justify-between p-10 text-2xl" id="features">
            <h1>Key Features</h1>
            <button className="border px-5 py-2 text-sm">More Features</button>
            </div>

            
            <div className="features grid grid-cols-3 gap-5 p-20">
                {cards.map((card, index)=>(
                <div key={index} style={{backgroundColor: index===selectedElementIndex? 'darkgreen' : 'white'}} onClick={
                    () =>{
                        setSelectedElementIndex(index)
                    }
                } className="border rounded-3xl shadow-md p-5 text-sm">
                    <div className=" w-10 h-10 bg-teal-50 rounded-full flex justify-center pt-3">
                    <i className={card.img}></i>   
                    </div>
                    <h3 className="font-bold my-5">{card.Title}</h3>
                    <p>{card.body}</p> 
                </div>
                ))}
            </div>
        </section>
        <section className="text-center bg-teal-50 text-xl py-5">
            <h1>Why use eNaira</h1>
            <p className="text-sm">All the amazing benefits we offer our customers using eNaira</p>
            <div className="grid grid-cols-4 gap-5 p-20">
                {cardsB.map((cardb, id)=>(
                    <div key={id} style={{backgroundColor: id===selectedElementIndex? 'darkgreen' : 'white'}} onClick={
                        () =>{
                            setSelectedElementIndex(id)
                        }
                    } className="border rounded p-5 bg-slate-50 text-sm">
                        <div className="border w-10 h-10 bg-neutral-800 text-white rounded-full text-center pt-2">{cardb.id}</div>
                        <h2 className="font-bold">{cardb.Title}</h2>
                        <p>{cardb.body}</p>
                    </div>
                    
                    
                ))}
            </div>
            <button className="border font-bold text-sm px-5 py-2 border-gray-800">Get Started Now</button>
        </section>
    </section> );
}
 
export default Home;