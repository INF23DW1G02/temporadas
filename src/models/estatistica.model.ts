import {Entity, model, property} from '@loopback/repository';

@model()
export class Estatistica extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  golos_marcados: number;

  @property({
    type: 'number',
    required: true,
  })
  golos_sofridos: number;

  @property({
    type: 'number',
    required: true,
  })
  faltas_sofridas: number;

  @property({
    type: 'number',
    required: true,
  })
  faltas_feitas: number;

  @property({
    type: 'number',
    required: true,
  })
  id_temporada: number;

  @property({
    type: 'number',
    required: true,
  })
  id_equipa: number;

  @property({
    type: 'number',
    required: true,
  })
  id_jogador: number;


  constructor(data?: Partial<Estatistica>) {
    super(data);
  }
}

export interface EstatisticaRelations {
  // describe navigational properties here
}

export type EstatisticaWithRelations = Estatistica & EstatisticaRelations;
