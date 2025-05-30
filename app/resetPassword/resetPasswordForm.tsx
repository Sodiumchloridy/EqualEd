'use client';

import Link from 'next/link';
import { useState } from 'react';
// import { doSendPasswordResetEmail } from '../../firebase/auth';

function ResetPasswordForm() {
    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
//   const [rateLimitMessage, setRateLimitMessage] = useState<string | null>(null); // State for rate-limit message

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!isSending) {
//       setIsSending(true);
//       setErrorMessage(null); // Reset error message
//       setRateLimitMessage(null); // Reset rate-limit message
//       try {
//         await doSendPasswordResetEmail(email);
//         alert('Email sent!');
//       } catch (error) {
//         if (error instanceof Error) {
//           alert('An error occured, try again later');
//           setIsSending(false);
//         }
//         setTimeout(() => setIsSending(false), 10000); // Reset signing-in state
//       }
//     } else {
//       setRateLimitMessage('You can only do this every 10 seconds!');
//     }
//   };

    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-300 dark:border-gray-500">
            <div className="flex flex-col justify-center p-20 items-center text-white m-0">
                <h2 className="text-2xl text-black font-bold mb-8">Reset your password</h2>
                <form>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 mb-4 bg-white text-black rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
                    >
                        {isSending ? 'Sending...' : 'Send Password Reset Email'}
                    </button>
                </form>
                <p className="mt-4 text-black">
                    <Link href="/login">Login Here</Link>
                </p>
            </div>
        </div>
    );
}

export default ResetPasswordForm;
