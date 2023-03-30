import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import TweetData from './TweetData';

type TweetProps = {
    tweetId: string
}

export default function Tweet({ tweetId }: TweetProps) {

    const options = {
        width: 700,
        // align: 'center',
        // cards: 'hidden',
        // conversation: 'none',
        // theme: 'dark'
        // theme: {
        //     shell: {
        //       background: 'transparent',
        //       color: '#2c458f'
        //     },
        // },
        // chrome: 'nofooter',
        // background: "transparent"
        // Use Tailwind classes in the style object
    };

    return (
        // hover:bg-m-blue
        <div className=' bg-m-grey  rounded-2xl p-4 justify-center'>
            <div className='w-fit m-auto'>
                <TwitterTweetEmbed tweetId={tweetId} options={options}/>
                <img src="/sline.svg" alt="Sline" className='m-auto mt-4' />
                <TweetData pos={0} neg={0} neu={0} top={0} com={0}/>
            </div>

        </div>


    )
};
