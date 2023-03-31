import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import TweetData from './TweetData';
import { TweetProps } from './interfaces';

export default function Tweet({ tweetId, pos, neg, neu, top, com }: TweetProps) {

    const options = {
        width: 600, 
        height: 600,
        autoWidth: true
    };

    return (
        <div className=' bg-m-grey rounded-2xl p-4 justify-center'>
            <div className='w-full m-auto flex flex-col '>
                <TwitterTweetEmbed tweetId={tweetId} options={options}/>
                <img src="/sline.svg" alt="Sline" className='m-auto mt-4' />
                <TweetData pos={pos} neg={neg} neu={neu} top={top} com={com}/>
            </div>

        </div>


    )
};
