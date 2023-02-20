export interface INews {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface INewsState {
  news: INews[];
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostsState {
  posts: IPost[];
}
