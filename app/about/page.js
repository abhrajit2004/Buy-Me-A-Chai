import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-10 md:px-0">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-2xl font-bold mb-4">About Buy Me a Chai</h1>
        <p className="mb-4">
          Buy Me a Chai is a platform where you can support your favorite creators by buying them a chai. 
          It&apos;s a simple way to show appreciation and help them continue doing what they love.
        </p>
        <p>
          Whether it&apos;s a one-time contribution or a recurring support, every chai helps. 
          Thank you for being a part of our community!
        </p>
      </div>
    </div>
  )
}

export default About

export const metadata = {
    title: 'About - Buy Me A Chai',
}