import { Prisma } from '@prisma/client';
export declare class Post implements Prisma.PostUncheckedCreateInput {
    id?: number;
    title: string;
    content?: string;
    published?: boolean;
    authorId?: number;
}
