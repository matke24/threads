import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    const newComment = new this.commentModel({
      text: createCommentDto.text,
      author: createCommentDto.authorId,
      parent: createCommentDto.parentId || null,
      likes: 0,
    });
    return newComment.save().then((doc) => doc.populate(['author', 'parent']));
  }

  findAll() {
    return this.commentModel.find().populate(['author', 'parent']).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
