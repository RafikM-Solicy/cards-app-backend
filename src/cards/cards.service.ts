import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { ICard } from 'src/interfaces/card.interface';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async getAllCards(): Promise<ICard[]> {
    try {
      const cardData = await this.cardRepository.find({select: ['id', 'value']});
      return cardData;
    } catch (error) {
      throw new Error('Failed to get cards');
    }
  }

  async createCard(cardData: ICard): Promise<Card> {
    try {
      const card = this.cardRepository.create(cardData);
      return this.cardRepository.save(card);
    } catch (error) {
      throw new Error('Failed to create card');
    }
  }

  async deleteCard(id: number): Promise<void> {
    try {
      await this.cardRepository.delete(id);
    } catch (error) {
      throw new Error('Failed to delete card');
    }
  }
}
