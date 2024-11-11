import React from 'react'

const Notification = () => {

    const notify = [
        {
            date : '22-05-1990',
            subject:'Lorem Ipsum is a dummy text placed for illustration only',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            date : '22-05-1990',
            subject:'Lorem Ipsum is a dummy text placed for illustration only',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            date : '22-05-1990',
            subject:'Lorem Ipsum is a dummy text placed for illustration only',
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
    ]
  return (
    <div className='mx-5 my-6 font-poppins font-extralight'>
        <p className='text-lg'>Notifications</p>
        <hr className="my-2 " />
        {notify.map((data,index)=>(
        <div className='my-5' key={index}>
            <p><span className='font-normal'>Date :</span> {data.date}</p>
            <p><span className='font-normal'>Subject :</span> {data.subject}</p>
            <p className='my-3'><span className='font-normal'>Description :</span> {data.desc}</p>
            <hr className="my-4 " />
        </div>
        ))}
    </div>
  )
}

export default Notification