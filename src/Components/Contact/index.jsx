import React from 'react';
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <div id='contacts' className="flex flex-col justify-evenly items-center mx-auto text-center py-5 gap-16 lgSize lg:items-start ">
       {/* Contact-Text */}
        <div className='mx-auto max-w-md sm:max-w-2xl lg:max-w-6xl mt-8 flex flex-col justify-between gap-10 px-5 aboutPageForLgScreen '>
             <h1 className=" text-4xl text-blue-400 font-bold">Get in Touch</h1>
            <p className='text-xl'>If you have any questions, projects, or just want to say hi, feel free to reach out. I'm always open to discussing new ideas and opportunities! 👇</p>
           
        </div>{/* End of Contact-Text */}

        {/* Contact-info */}
        <div className='flex flex-wrap lg:ml-5'>
            <div className='flex items-center gap-3 flex-col lg:flex-row lg:items-center '>
                <span className='flex items-center bg-white rounded-full border shadow-lg h-20 w-20 justify-center'>
                <CgMail className='text-4xl text-blue-500' />
                </span>
               <div className='flex lg:flex-col text-start'>
                <h3 className='font-bold mr-2'>Mail: </h3>
                <a href="mailto:nyol_05@yahoo.com"> ernestojrosorio15@gmail.com</a>
                </div> 
            </div>

        </div>  {/* End of Contact-info */}
     
     
    </div>
  );
}

export default Contact;
