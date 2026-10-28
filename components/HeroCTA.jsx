

import { ctaContent } from '@/constants/heroData'
import Button from "./Button"
import Link from "next/link"
import Image from "next/image"

const HeroCTA = () => {
    const { eyebrow, title, description, primaryAction, image, imageAlt, secondaryAction } = ctaContent
    return (
        <div className="mx-auto max-w-7xl">
            <div className="flex max-w-5xl mx-auto justify-center items-center bg-sky-900 text-white p-10 rounded-2xl">
                <div className="">
                    <h3 className="text-xs border border-sky-300 w-fit p-3 rounded-full">
                        <span className="w-3 h-3 bg-sky-400 inline-flex rounded-full justify-center items-center mr-2" />
                        {eyebrow}
                    </h3>
                    <p className="text-4xl mt-12 font-semibold">{title}</p>
                    <p className="text-gray-300 text-[16px]">{description} </p>

                    <div className="flex gap-10 items-center mt-10">
                        <Link className="bg-slate-900 rounded-full py-4 px-10 inline-flex " href={primaryAction.href}>
                            {primaryAction.label}
                        </Link>

                        
                        <Link href={secondaryAction.href}>
                            {secondaryAction.label}
                        </Link>
                    </div>
                </div>
                <div>
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={300}
                        height={200}
                        className="object-cover w-auto h-auto"
                    />
                </div>
            </div>

        </div>
    )
}
export default HeroCTA