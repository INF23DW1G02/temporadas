import {Entity, model, property} from '@loopback/repository';

@model()
export class Jogo extends Entity {
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
  resultado: string;

  @property({
    type: 'number',
    required: true,
  })
  id_equipa: number;


  constructor(data?: Partial<Jogo>) {
    super(data);
  }
}

export interface JogoRelations {
  // describe navigational properties here
}

export type JogoWithRelations = Jogo & JogoRelations;
