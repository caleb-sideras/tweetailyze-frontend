import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import TweetData from './TweetData';
import { TweetCluster } from './interfaces';

export default function Tweet({ tweet_id, pos, neg, neu, topic_weight, compound }: TweetCluster) {

    const options = {
        width: 600, 
        height: 600,
        autoWidth: true
    };

    return (
        <div className=' bg-m-grey rounded-2xl p-4 justify-center'>
            <div className='w-full m-auto flex flex-col '>
                <TwitterTweetEmbed tweetId={tweet_id} options={options}/>
                <img src="/sline.svg" alt="Sline" className='m-auto mt-4' />
                <TweetData pos={pos} neg={neg} neu={neu} topic_weight={topic_weight} compound={compound}/>
            </div>

        </div>

    )
};
