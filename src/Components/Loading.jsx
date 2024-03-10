import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    return (
        <div className='flex justify-around'>
            <div className='container mx-auto p-4 bg-white mb-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 '>
                    {[1, 2, 3, 4].map((el, index) => {
                        return (
                            <Skeleton key={el} className='rounded-lg p-8 relative hover:bg-gray-100' />
                        )
                    })}
                </div>
                <Skeleton className='h-[250px] w-[1030] mt-4'/>
            </div>
        </div>
    )
}
