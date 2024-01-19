import {Entity, model, property} from '@loopback/repository';

@model()
export class Temporada extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;


  constructor(data?: Partial<Temporada>) {
    super(data);
  }
}

export interface TemporadaRelations {
  // describe navigational properties here
}

export type TemporadaWithRelations = Temporada & TemporadaRelations;
