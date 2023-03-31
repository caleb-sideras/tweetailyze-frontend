export interface TweetDataProps {
  neg: number;
  neu: number;
  pos: number;
  compound: number;
  topic_weight: number;
}

export interface TweetCellProps {
  open: boolean
  num: number
  cell_v: string
  borderStyling: string[]
  title: string
  description: string
}

export interface CellVariants {
  [key: string]: string[];
}

export interface TweetCluster extends TweetDataProps{
  tweet_id: string;
};

export type ClusterProps = {
  topic: string
  key_words: string[]
  tweets: TweetCluster[];
};

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

export type ProfileProps = {
  id: string
  name: string
  username: string

}