

function page() {
  return (
    <div className='z-0 relative'>
{/* 
   <video
        ref={introVideoRef}
        className="absolute left-0 top-0 size-full object-cover z-0"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd} // Trigger when intro video finishes
      >
        <source src="/video/earth_intro.webm" type="video/webm" />
      </video> */}
      <div className='p-12 right-0 z-50 absolute w-8/12 space-y-4 flex flex-col items-center justify-center h-screen'>  
      <div className="bg-black bg-opacity-50 p-4 rounded-lg space-y-4">
      <p className='text-white'>2019 unveils the most unique campaign marketing panel, The Whistle. It is a Smart Mobile Marketing Panel that has been innovated with in-depth learnings from the evolution of Mobile Marketing over decades.</p>
      <p className='text-wlOrange'>Whistle is developed through advanced AI and machine learning. It stands apart from the rest of the service providers in the industry for its clear analytics and insights.</p>
      <p className='text-white'>Whistle follows a clean slate protocol to create the respective demographic audience. The nature of Whistle is to deduce the prospects from the insights post analysis and can serve as leads for relative campaigns too. This ensures best returns over the investments. The conversion ratio is positively high in Whistle. </p>
      <p className='text-white'>Since its launch, Whistle has been positively impacting the sales and revenues of small to large scale businesses spread across various sectors. Read on to know how!</p>
      </div>
      </div>
    </div>
  )
}

export default page