import { IsEmail, IsOptional, IsString } from 'class-validator';
import { Post } from '../entities/post.entity';

export class CreatePostDto extends Post {
  @IsString()
  title: string;

  @IsOptional()
  content?: string;

  @IsEmail()
  authorEmail: string;
}
