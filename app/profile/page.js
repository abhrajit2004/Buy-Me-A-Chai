import React from 'react'
import Profile from '@/components/Profile';

const Dashboard = ({ params }) => {

  return (
    <div>
      <Profile />
    </div>
  )
}

export default Dashboard
export const metadata = {
  title: 'Your Profile - Buy Me A Chai',
}