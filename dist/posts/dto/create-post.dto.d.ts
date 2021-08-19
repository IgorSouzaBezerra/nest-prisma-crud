import { Post } from '../entities/post.entity';
export declare class CreatePostDto extends Post {
    title: string;
    content?: string;
    authorEmail: string;
}
