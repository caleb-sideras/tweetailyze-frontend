export interface TweetDataProps {
  pos: number
  neg: number
  neu: number
  top: number
  com: number
}

export interface TweetProps extends TweetDataProps {
  tweetId: string
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

export type TweetCluster = {
  tweetId: string;
  neg: number;
  neu: number;
  pos: number;
  com: number;
  top: number;
};
export type ClusterProps = {
  cluster: TweetCluster[];
};

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}