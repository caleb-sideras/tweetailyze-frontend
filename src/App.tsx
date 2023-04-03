import React, { useEffect, useRef, useState } from 'react'
import Cluster from './Cluster'
import Profile from './Profile'
import Search from './Search'
import { ClusterProps, ProfileProps, TweetCluster } from './interfaces'
import './index.css'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

type Props = {}

export default function App({ }: Props) {
  const [data, setData] = useState<string | null>(null);
  const [clusters, setClusters] = useState<ClusterProps[] | null>(null);
  const [clustersActive, setClustersActive] = useState<ClusterProps[] | null>(null);
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [indexL, setIndexL] = useState(0)
  const [indexR, setIndexR] = useState(3)


  const [currentCols, setCurrentCols] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      const container = containerRef.current;
      if (container) {
        const computedStyle = window.getComputedStyle(container);
        const gridColumnTemplate = computedStyle.getPropertyValue("grid-template-columns");
        const numColumns = gridColumnTemplate.split(" ").length;

        if (clustersActive && clusters) {
          if (numColumns < clustersActive.length) {
            if (indexR > 1) {
              setClustersActive(clusters.slice(indexL, indexR - 1))
              setIndexR(indexR - 1)
            }
          } else if (numColumns > clustersActive.length) {
            if (indexR <= clustersActive.length) {
              setClustersActive(clusters.slice(indexL, indexR + 1))
              setIndexR(indexR + 1)
            }
          }
        }
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [clustersActive]);


  const handleDataChange = (newData: string) => {
    let values: any
    try {
      values = JSON.parse(newData);
      console.log(JSON.parse(newData))
    } catch (error) {
      console.error(error);
    }
    if (values['clusters'].length <= 3) {
      setIndexR(values['clusters'].length)
    }

    setClusters(values['clusters'])
    setClustersActive(values['clusters'].slice(indexL, indexR))
    setProfile(values['user'])
  };

  const handleRightButton = () => {
    if (clusters && indexR + 1 <= clusters.length) {
      setClustersActive(clusters.slice(indexL + 1, indexR + 1))
      setIndexL(indexL + 1)
      setIndexR(indexR + 1)
    }
  }
  const handleLeftButton = () => {
    if (clusters && indexL - 1 >= 0) {
      setClustersActive(clusters.slice(indexL - 1, indexR - 1))
      setIndexL(indexL - 1)
      setIndexR(indexR - 1)
    }
  }

  return (
    <div className='w-full h-full justify-center items-center flex flex-row gap-4 px-4 py-4'>
      {clustersActive &&
        <button className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center bg-t-white cursor-pointer"
          onClick={handleLeftButton}
        >
          <ArrowLeftIcon className='text-m-blue' />
        </button>
      }
      <div ref={containerRef} className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fit'>
        <div className='col-span-full text-s-blue text-center text-3xl nunito-text'>
          tweetAilyze.
        </div>
        <div className='col-span-full'>
          <Search data={data} onDataChange={handleDataChange} />
        </div>
        <div className='col-span-full'>
          {profile && <Profile {...profile} />}
        </div>
        {clustersActive && clustersActive.map((cluster: ClusterProps) => (
          <div key={cluster.topic} style={{ gridTemplateColumns: "minmax(300px, 1fr)" }}>
            <Cluster {...cluster} />
          </div>
        ))}
      </div>
      {clustersActive &&
        <button className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center bg-t-white cursor-pointer"
          onClick={handleRightButton}
        >
          <ArrowRightIcon className='text-m-blue' />
        </button>
      }


    </div>
  )
}