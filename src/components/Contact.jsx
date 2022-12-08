import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#111111] flex justify-center items-center p-4">
      <form method='post' action='https://getform.io/f/17ebe30f-6bf1-40a1-bc66-3e20de00040b' className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-red-500 text-zinc-100'>Contact</p>
            <p className='text-zinc-300 py-4'>// Submit the form below or shoot me an email - cjrequena11@gmail.com</p>
          </div>
          <input className='bg-[#3b3b3b] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#3b3b3b]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#3b3b3b] p-2' name='message' rows='10' placeholder='Message' />
          <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact