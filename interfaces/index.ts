export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface PostData {
  id: number;
  title: string;
  description: string;
  body: Array<any>;
  comments_count: number;
  created_at: string;
  updated_at: string;
  slug: string;
  status: string;
  user: User;
  likes: number;
  dislikes: number;
  views: number;
  img: string;
}

export interface Comment {
  id: number;
  user: User;
  text: string;
  likes_count: number;
  dislikes_count: number;
  created_at: string;
  updated_at: string;
  post: PostData;

}