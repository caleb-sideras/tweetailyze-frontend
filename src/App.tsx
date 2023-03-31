import React from 'react'
import Cluster from './Cluster'
import { TweetCluster } from './interfaces'

type Props = {}
const cluster: TweetCluster[] = [
  {
    "tweetId" : "1619810123358285824",
    "neg": 0,
    "neu": 1,
    "pos": 0,
    "com": 0,
    "top": 0.01208955708907979
  },
  {
    "tweetId" : "1640935697346338817",
    "neg": 1,
    "neu": 1,
    "pos": 0,
    "com": 0,
    "top": 0.9
  },
  {
    "tweetId" : "1641412789502636032",
    "neg": 0,
    "neu": 0,
    "pos": 1,
    "com": 1,
    "top": 0.05
  }
]

export default function App({}: Props) {
  return (
    <div className='w-full justify-center items-center flex'>
        <Cluster cluster={[...cluster]}/>

    </div>
  )
}