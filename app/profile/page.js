"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

const Dashboard = () => {

    const { data: session } = useSession()

    if(!session) {
        const router = useRouter();
        router.push('/login');
    }

  return (
    <div>
        {/* Make a form for creating a dashboard for user  */}
        

    </div>
  )
}

export default Dashboard
