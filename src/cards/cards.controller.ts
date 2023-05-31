import { Controller, Get, Post, Body, Delete, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CardsService } from './cards.service';
import { ICard } from 'src/interfaces/card.interface';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async getAllCards(): Promise<ICard[]> {
    try {
      return this.cardsService.getAllCards();
    } catch (error) {
      throw new HttpException('Failed to get cards', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async createCard(@Body() card: ICard): Promise<ICard> {
    try {
      return this.cardsService.createCard(card);
    } catch (error) {
      throw new HttpException('Failed to create card', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async deleteCard(@Param('id') id: number): Promise<void> {
    try {
      return this.cardsService.deleteCard(id);
    } catch (error) {
      throw new HttpException('Failed to delete card', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}