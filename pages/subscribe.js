import Link from 'next/link'

function Subscribe() {
    return(
        <div className='bg-gradient-to-bl from-indigo-100 to-indigo-400 h-full align-middle'>
          <div className='flex flex-col mx-auto w-6/12 text-center'>
            <p className='mx-auto mt-16 mb-10'>You have to subscribe to use this service</p>
            <Link href='#'>
              <a className='bg-lime-300 w-full lg:w-3/12 px-2 py-1 rounded-md h-10 mx-auto text-xl hover:bg-lime-600 flex align-middle justify-center'>Subscribe</a>
            </Link>
          </div>
        </div>
      );
}

export default Subscribe;