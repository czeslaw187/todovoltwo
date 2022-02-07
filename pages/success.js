import {useRouter} from 'next/router'

function Success() {
    const router = useRouter()
    setTimeout(()=>{router.push('/home')}, 3000)
    
    return ( 
        <div className='flex h-screen bg-gradient-to-bl from-indigo-100 to-indigo-400'>
            <div className="flex bg-lime-200 align-middle w-10/12 md:w-7/12 h-1/6 md:h-2/6 rounded-xl m-auto">
                <p className="text-center text-2xl md:text-5xl m-auto py-auto text-lime-700 font-bold">Payment successful</p>
            </div>
        </div>
     );
}

export default Success;