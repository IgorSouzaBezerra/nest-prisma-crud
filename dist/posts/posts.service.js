"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PostsService = class PostsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPostDto) {
        const { authorEmail } = createPostDto;
        delete createPostDto.authorEmail;
        const data = Object.assign(Object.assign({}, createPostDto), { author: {
                connect: {
                    email: authorEmail,
                },
            } });
        return this.prisma.post.create({
            data,
            include: {
                author: true,
            },
        });
    }
    async findAll() {
        return this.prisma.post.findMany({
            include: {
                author: true,
            },
        });
    }
    async getPublishedPosts() {
        return this.prisma.post.findMany({
            where: { published: true },
        });
    }
    async findOne(id) {
        return this.prisma.post.findUnique({
            where: { id },
            include: {
                author: true,
            },
        });
    }
    async update(id, updatePostDto) {
        const data = Object.assign({}, updatePostDto);
        return this.prisma.post.update({
            where: { id },
            data,
            include: {
                author: true,
            },
        });
    }
    async remove(id) {
        return this.prisma.post.delete({
            where: { id },
        });
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map