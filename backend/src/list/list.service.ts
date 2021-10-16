import { Injectable } from '@nestjs/common';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { List } from 'src/entities/list.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListService {
    constructor(
        @InjectRepository(List)
        private listRepository: Repository<List>
    ) {
        
    }
    async create(list: List): Promise<List> {
        return await this.listRepository.save(list);
    }

    async readAll(): Promise<List[]> {
        return await this.listRepository.find();
    }

    async update(list: List): Promise<UpdateResult>{
        return await this.listRepository.update(list.id, list);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.listRepository.delete(id);
    }
}
