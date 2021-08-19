import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPostDto: CreatePostDto): Promise<import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    }>;
    findAll(): Promise<(import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    })[]>;
    getPublishedPosts(): Promise<import(".prisma/client").Post[]>;
    findOne(id: number): Promise<import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    }>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<import(".prisma/client").Post & {
        author: import(".prisma/client").User;
    }>;
    remove(id: number): Promise<import(".prisma/client").Post>;
}
