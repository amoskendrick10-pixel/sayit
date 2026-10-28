

import { trustBlogPosts } from '@/constants/heroData';
import HeroTrustCard from './HeroTrustCard';
import React from 'react'

const HeroTrustList = () => {
  
  return (
    <div className='py-12'>
      <div className='text-center'>
        <h2 className='text-4xl font-semibold'>You can always say it</h2>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, earum eos! Alias, illum quidem natus deserunt distinctio nisi ipsam aut, ut dicta quos iusto pariatur. Recusandae voluptates modi eligendi laboriosam!</p>
      </div>
      <div className='grid grid-cols-3 gap-6 max-w-7xl mx-auto py-12'>
      {
        trustBlogPosts.map(blog => (
          <HeroTrustCard key={blog.id} blog={blog} />
        ))
      }
    </div>
    </div>
  )
}

export default HeroTrustList