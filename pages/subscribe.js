import Link from 'next/link'
import {useSession} from 'next-auth/react'
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);

function Subscribe() {
    const {data: session} = useSession()
    const createCheckOutSession = async (e) => {
      e.preventDefault()
      const stripe = await stripePromise;
      const checkoutSession = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/create-stripe-session',{email:session.session.user.email});
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });
      if (result.error) {
        alert(result.error.message);
      } 
    };
    return(
        <div className='bg-gradient-to-bl from-indigo-100 to-indigo-400 h-full align-middle'>
          <div className='flex flex-col mx-auto w-6/12 text-center'>
            <p className='mx-auto mt-16 mb-10'>You have to subscribe to use this service</p>
            <button className='bg-lime-300 w-full lg:w-3/12 cursor-pointer px-2 py-1 rounded-md h-10 mx-auto text-xl hover:bg-lime-600 flex align-middle justify-center' onClick={createCheckOutSession}>Subscribe</button>
            <Link href='/'>
                <a className='cursor-pointer underline my-4 hover:text-blue-500'>{session ? '' : 'Back to Home Page'}</a>
            </Link>
          </div>
        </div>
      );
}

export default Subscribe;

