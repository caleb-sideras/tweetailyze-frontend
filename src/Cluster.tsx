import React, { useState } from 'react'
import Tweet from './Tweet'
import { TweetCluster, SortDirection, ClusterProps } from './interfaces';

export default function Cluster({cluster}: ClusterProps) {

  const [sortProperty, setSortProperty] = useState<keyof TweetCluster>('neg');
  const [sortDirection, setSortDirection] = useState(SortDirection.Descending);

  const handleSort = (property: keyof TweetCluster) => {
    setSortProperty(property);
    setSortDirection(
      sortProperty === property
        ? sortDirection === SortDirection.Ascending
          ? SortDirection.Descending
          : SortDirection.Ascending
        : SortDirection.Descending,
    );
  };

  const sortedCluster = [...cluster].sort((a, b) => {
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
    <div className='max-w-xl'>
      <div className='rounded-xl bg-d-grey w-full p-4'>
        <div className='text-xl text-t-white'>Memes</div>
        <div className='text-lg text-t-grey'>
          word, word, word, word, word
        </div>
      </div>
      <button onClick={() => handleSort('neg')}>Sort by neg</button>
      <button onClick={() => handleSort('neu')}>Sort by neu</button>
      <button onClick={() => handleSort('pos')}>Sort by pos</button>
      <button onClick={() => handleSort('com')}>Sort by comp</button>
      <button onClick={() => handleSort('top')}>Sort by top</button>
      {sortedCluster.map((tweet) => (
        <Tweet
          key={tweet.tweetId}
          tweetId={tweet.tweetId}
          neg={tweet.neg}
          neu={tweet.neu}
          pos={tweet.pos}
          com={tweet.com}
          top={tweet.top}
        />
      ))}
    </div>
  )
}