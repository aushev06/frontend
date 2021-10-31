export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    comments_count: number;
    ready_for_work: boolean;
    recognized: boolean;
    description: string;
    position: string;
    created_at: string;
    links: string[];
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
    likes_count: number;
    dislikes_count: number;
    dislikes: number;
    views: number;
    img: string;
    html: string;
    liked_type?: 'like' | 'dislike' | null;
    category: Category;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
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
    parent_id: number;
    user_reply_id: number;
    comments: Comment[];
    liked_type?: 'like' | 'dislike' | null

}

export interface Theme {
    id: number;
    name: string;
}

export interface SpecialistCategory {
    position: string;
    count: number;
}

export interface Pagination {
    current_page: number;
    data: Array<User | PostData | Comment>,
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    total: number;
}
