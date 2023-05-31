import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CardsService } from './cards.service';
import { ICard } from 'src/interfaces/card.interface';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async getAllCards(): Promise<ICard[]> {
    const cardData = await this.cardsService.getAllCards();
    const result = cardData.map(card => {
        return {
            value: Number(card.value)
        }
    })
    return result;
  }

  @Post()
  async createCard(@Body() card: ICard): Promise<boolean> {
    await this.cardsService.createCard(card)
    return true;
  }

  @Delete(':id')
  async deleteCard(@Param('id') id: number): Promise<void> {
    return this.cardsService.deleteCard(id);
  }
}