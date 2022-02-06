import {useRouter} from 'next/router'

function Success() {
    const router = useRouter()
    setTimeout(()=>{router.push('/home')}, 3000)
    
    return ( 
        <div className='flex h-screen bg-gradient-to-bl from-indigo-100 to-indigo-400'>
            <div className="align-middle w-6/12 m-auto">
                <p className="block text-center text-5xl text-lime-700 font-bold">Payment successful</p>
            </div>
        </div>
     );
}

export default Success;