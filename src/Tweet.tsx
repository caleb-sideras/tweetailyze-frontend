import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import TweetData from './TweetData';
import { TweetProps } from './interfaces';

export default function Tweet({ tweetId, pos, neg, neu, top, com }: TweetProps) {

    const options = {
        width: 700,
    };

    return (
        // hover:bg-m-blue
        <div className=' bg-m-grey  rounded-2xl p-4 justify-center'>
            <div className='w-fit m-auto'>
                <TwitterTweetEmbed tweetId={tweetId} options={options}/>
                <img src="/sline.svg" alt="Sline" className='m-auto mt-4' />
                <TweetData pos={pos} neg={neg} neu={neu} top={top} com={com}/>
            </div>

        </div>


    )
};
