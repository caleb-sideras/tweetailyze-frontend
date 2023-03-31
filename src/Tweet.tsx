import React, { useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import TweetData from './TweetData';
import { TweetCluster } from './interfaces';

export default function Tweet({ tweet_id, pos, neg, neu, topic_weight, compound }: TweetCluster) {

    const options = {
        width: 600,
        height: 600,
        autoWidth: true
    };
    const [loaded, setLoaded] = useState(false);

    function handleLoad() {
        setLoaded(true);
    }

    return (
        <div className=' bg-m-grey rounded-2xl p-4 justify-center'>
            <div className='w-full m-auto flex flex-col '>
                {! loaded && (
                    <svg
                        className="animate-spin h-5 w-5 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#004a77"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="#c2e7ff"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                <TwitterTweetEmbed tweetId={tweet_id} options={options} onLoad={handleLoad} />
                <img src="/sline.svg" alt="Sline" className='m-auto mt-4' />
                <TweetData pos={pos} neg={neg} neu={neu} topic_weight={topic_weight} compound={compound} />
            </div>

        </div>

    )
};
