import React, { useEffect, useState } from 'react'
import Tweet from './Tweet'
import { TweetCluster, SortDirection, ClusterProps } from './interfaces';
import Sort from './Sort';
import ToggleSort from './ToggleSort';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export default function Cluster(cluster: ClusterProps) {
  const {topic, key_words, tweets} = cluster

  const [sortProperty, setSortProperty] = useState<keyof TweetCluster>('neg');
  const [sortDirection, setSortDirection] = useState(SortDirection.Descending);

  const handleSort = (property: keyof TweetCluster) => {
    setSortProperty(property);
  };

  useEffect(() => {
    setSortProperty('pos')
  }, []);

  const handleToggle = () => {
    setSortDirection(
      sortDirection === SortDirection.Ascending
        ? SortDirection.Descending
        : SortDirection.Ascending
    );
  }

  const sortedCluster = [...tweets].sort((a, b) => {
    const aProp = a[sortProperty];
    const bProp = b[sortProperty];
    if (aProp === bProp) return 0;
    if (sortDirection === SortDirection.Ascending) {
      return aProp > bProp ? 1 : -1;
    } else {
      return aProp < bProp ? 1 : -1;
    }
  });

  return (
    <div className='max-w-xs overflow-hidden gap-4 flex flex-col '>
      <div className='rounded-xl bg-d-grey w-full p-4'>
        <div className='text-xl text-t-white overflow-hidden whitespace-nowrap text-ellipsis'>{topic}</div>
        <div className='text-lg text-t-grey overflow-hidden whitespace-nowrap text-ellipsis'>
          {key_words.join(', ')}
        </div>
        <div className='flex flex-row mt-4 gap-4'>
          <Sort handleSort={handleSort} />
          <ToggleSort handleToggle={handleToggle} />
        </div>
      </div>


      <ScrollArea.Root className="w-full fill-height flex flex-col rounded overflow-hidden">
        <ScrollArea.Viewport className="w-full h-full rounded">
          <div className="py-[15px] flex flex-col gap-4">
            {sortedCluster.map((tweet) => (
              <Tweet
                key={tweet.tweet_id}
                tweet_id={tweet.tweet_id}
                neg={tweet.neg}
                neu={tweet.neu}
                pos={tweet.pos}
                compound={tweet.compound}
                topic_weight={tweet.topic_weight}
              />
            ))}
          </div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-d-grey transition-colors duration-[160ms] ease-out hover:bg-d-grey data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-vl-grey rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>

        <ScrollArea.Corner className="bg-bg-d-grey" />
      </ScrollArea.Root>
    </div>
  )
}