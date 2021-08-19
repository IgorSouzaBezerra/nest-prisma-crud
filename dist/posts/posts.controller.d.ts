import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    }>;
    findAll(): Promise<(import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    })[]>;
    getPublishedPosts(): Promise<import(".prisma/client").Post[]>;
    findOne(id: string): Promise<import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    }>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    }>;
    publishPost(id: string): Promise<import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    }>;
    remove(id: string): Promise<import(".prisma/client").Post>;
}
