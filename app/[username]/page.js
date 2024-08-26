import PaymentPage from '@/components/PaymentPage'
import React from 'react'
import connectDb from '@/db/connectDb'
import User from '@/models/User'
import { notFound } from 'next/navigation'

const Username = async ({ params }) => {


    const checkUser = async () => {
        await connectDb();
        let u = await User.findOne({ username: params.username });
        if (!u) {
            return notFound();
        }
    }

    await checkUser();

    return (
        <div>
            <PaymentPage username={params.username} />
        </div>
    )
}

export default Username

export async function generateMetadata({ params }) {
    return {
      title: `Support ${params.username} - Buy Me A Chai`,
    }
}