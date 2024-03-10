import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Graph from './Graph';
import Dashboard from './Dashboard';

export default function Content() {
    const [showGraph, setShowGraph] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let loadingTime = setInterval(() => {
            setLoading(false);
        }, 2000);

        return () => { clearInterval(loadingTime) };
    })

    if (loading) {
        return (
            <div className="w-[1200px] bg-white shadow-md p-5 rounded-xl">
                <Loading />
            </div>
        )
    } else {
        return (
            <div className="w-[1200px] bg-white shadow-md p-5 rounded-xl">
                <div className='flex justify-around'>
                    <div>
                        <Dashboard />
                        {showGraph && <Graph />}
                    </div>
                    <div className='mt-12'>
                        {showGraph ? <svg onClick={() => { setShowGraph(!showGraph) }} width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 12.75C12.2891 12.75 12.1016 12.6797 11.9609 12.5391L7.46094 8.03906C7.15625 7.75781 7.15625 7.26562 7.46094 6.98438C7.74219 6.67969 8.23438 6.67969 8.51562 6.98438L12.5 10.9453L16.4609 6.98438C16.7422 6.67969 17.2344 6.67969 17.5156 6.98438C17.8203 7.26562 17.8203 7.75781 17.5156 8.03906L13.0156 12.5391C12.875 12.6797 12.6875 12.75 12.5 12.75Z" fill="black" fillOpacity="0.5" />
                        </svg> :
                            <svg onClick={() => { setShowGraph(!showGraph) }} width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 5.25C12.7109 5.25 12.8984 5.32031 13.0391 5.46094L17.5391 9.96094C17.8438 10.2422 17.8438 10.7344 17.5391 11.0156C17.2578 11.3203 16.7656 11.3203 16.4844 11.0156L12.5 7.05469L8.53906 11.0156C8.25781 11.3203 7.76562 11.3203 7.48438 11.0156C7.17969 10.7344 7.17969 10.2422 7.48438 9.96094L11.9844 5.46094C12.125 5.32031 12.3125 5.25 12.5 5.25Z" fill="black" fillOpacity="0.5" />
                            </svg>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
