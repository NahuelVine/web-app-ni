import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { ListService } from './list.service';
import { List } from 'src/entities/list.entity';


@Controller('list')
export class ListController {
    constructor(private listService: ListService){
    }

    @Get()
    read(): Promise<List[]>{
        return this.listService.readAll();
    }

    @Post('create')
    async create(@Body() list: List): Promise<any>{
        return this.listService.create(list);    
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() list: List): Promise<any>{
        list.id = Number(id);
        return this.listService.update(list);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any>{
        return this.listService.delete(id);
    }
}
