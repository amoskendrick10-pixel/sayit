

import Image from 'next/image';
import React from 'react'

const HeroTrustCard = ({blog}) => {
    const { category, title, excerpt, author, publishedAt, readTime, image, imageAlt} = blog;
  return (
    <div>
        <div className='flex flex-col gap-4 rounded-lg bg-sky-100 p-4 hover:shadow-lg transition-shadow duration-300'>
            <Image
                src={image}
                alt={imageAlt}
                width={300}
                height={200}
                className="object-cover w-auto h-auto"
            />

            <div className='flex flex-col gap-2 pb-6 px-6'>
                <h3 className="text-2xl font-medium">{title}</h3>
                <p className="text-gray-600 my-4">{excerpt}</p>

                <div>
                    <p className="text-gray-500 text-sm mt-2">
                        By {author} | {publishedAt} | {readTime} min read
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroTrustCard