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

  async getAllCards(): Promise<Card[]> {
    return this.cardRepository.find();
  }

  async createCard(cardData: ICard): Promise<boolean> {
    const card = this.cardRepository.create(cardData);
    await this.cardRepository.save(card);
    return true;
  }

  async deleteCard(id: number): Promise<void> {
    await this.cardRepository.delete(id);
  }
}
