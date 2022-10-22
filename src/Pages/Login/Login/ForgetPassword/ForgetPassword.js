import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail  } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';

const ForgetPassword = () => {
    // const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [email, setEmail] = useState('');
    const [user, loading, error] = useAuthState(auth);
    console.log(email);
    const [sendPasswordResetEmail, sending, updateError] = useSendPasswordResetEmail(auth);
    if (updateError) {
      return (
        <div>
          <p className="text-red-500 text-xs italic text-lg">Error: {updateError?.message}</p>
        </div>
      );
    }
    if (sending) {
      return <p>Sending...</p>;
    }

    return (
        <div className='flex justify-center items-center'>
    <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={async () => {
          await sendPasswordResetEmail(email);
          alert('Sent email');
        }}
      >
        Reset password
      </button>
  </div>
    );
};

export default ForgetPassword;