import { useState } from "react";
const FaqDrop = ({question, answer}) => {
    const [openModal, setOpenModal] = useState(false)

    const dropModal = ()=>{
        !openModal ? setOpenModal(true) : setOpenModal(false)
    }

    const ans = <div>
        <p>{answer}</p>
    </div>
    return ( 
        <div className="border border-black m-3">
            <div className={openModal ? "faq-drop-header bg-gray-500 rounded-tr-sm rounded-tl-sm text-white font-bold" : "faq-drop-header"} onClick={dropModal} >
                   <p className='flex gap-2 justify-between items-center cursor-pointer p-3'>{question}<i className='fa fa-plus' /> </p>

               </div>
               <div className="bg-gray-500 text-white">
               {openModal? ans: ''}
               </div>
              
        </div>
     );
}
 
export default FaqDrop;