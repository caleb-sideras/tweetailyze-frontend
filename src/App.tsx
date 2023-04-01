import React, { useState } from 'react'
import Cluster from './Cluster'
import Profile from './Profile'
import Search from './Search'
import { ClusterProps, ProfileProps, TweetCluster } from './interfaces'
import './index.css'

type Props = {}

export default function App({ }: Props) {
  const [data, setData] = useState<string | null>(null);
  const [clusters, setClusters] = useState<ClusterProps[] | null>(null);
  const [profile, setProfile] = useState<ProfileProps | null>(null);

  const handleDataChange = (newData: string) => {
    let values: any;
    try {
      values = JSON.parse(newData);
      // console.log(values)
    } catch (error) {
      console.error(error);
    }
    setClusters(values['clusters'])
    setProfile(values['user'])
  };

  return (
    <div className='w-full h-full justify-center items-center flex flex-col gap-4 px-4 pt-4'>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-auto-fit'>
        <div className='col-span-full text-s-blue text-center text-3xl nunito-text'>
          tweetAilyze.
        </div>
        <div className='col-span-full'>
          <Search data={data} onDataChange={handleDataChange} />
        </div>
        <div className='col-span-full'>
          {profile && <Profile {...profile} />}
        </div>
        {clusters && clusters.map((cluster: ClusterProps) => (
          <div key={cluster.topic} style={{ gridTemplateColumns: "minmax(300px, 1fr)" }}>
            <Cluster {...cluster} />
          </div>
        ))}
      </div>

    </div>
  )
}