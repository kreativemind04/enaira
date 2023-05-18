import FaqDrop from "./FaqDrop";
import fac from '../assets/faq.png'
const Faq = () => {

    const faqDiv = [
        {
            question: 'How Does A Customer Identify Stores Shops And Outlets That Accept eNaira?',
            answer: 'While efforts will be made to put signages and decals at designated merchant locations, customers can simply ask the merchants if they accept eNaira.',
        },
        {
            question: 'What is an eNaira wallet?',
            answer: 'The eNaira wallet is a digital storage that holds the eNaira. It is held and managed on a distributed ledger. The eNaira wallet is required to access, hold and use eNaira.',
        },
        {
            question: 'What makes eNaira different from the money in my bank account?',
            answer: 'eNaira is the digital form of the cash and is a direct liability on the Central Bank of Nigeria while the customer deposits are direct liabilities on the financial institutions.',
        },
        {
            question: 'In a typical transaction, What is the difference between and online bank transaction and eNaira wallet?',
            answer: 'There are intermediaries for the typical online bank transactions, whereas for eNaira transactions, there are no intermediaries.',
        },
        {
            question: 'Will eNaira replace cash?',
            answer: 'No, it will circulate alongside cash. The eNaira will complement cash as a less costly, more efficient, generally accepted, safe, and trusted means of payment.',
        }
    ]
    return ( <div className="flex justify-between p-20">
        <div>
            <div className="w-2/4 text-center">
                <h2 className="font-bold m-2">Frequently Asked Questions (FAQ)</h2>
                <p>We are here to guide you. Get answers to your most pressing questions about eNaira from this comprehensive FAQ section.</p>
            </div>
            <div>
                <img src={fac} alt="" />
            </div>
        </div>
        <div>
            {faqDiv.map((faq, index)=>(
                <FaqDrop key={index} {...faq}/>
            ))}
        </div>
    </div> );
}
 
export default Faq;