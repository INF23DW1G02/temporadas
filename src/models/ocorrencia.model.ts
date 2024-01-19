import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Jogador} from './jogador.model';

@model()
export class Ocurrencia extends Entity {
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
  num_faltas: number;

  @property({
    type: 'number',
    required: true,
  })
  num_golos: number;

  @property({
    type: 'number',
    required: true,
  })
  num_cartao: number;

  @property({
    type: 'string',
    required: true,
  })
  substituicao: string;

  @property({
    type: 'number',
    required: true,
  })
  id_equipa: number;

  @property({
    type: 'number',
    required: true,
  })
  id_jogo: number;
  @property({
    type: 'number',
    required: true,
  })
  id_temporada: number;

  @belongsTo(() => Jogador, {name: 'OcurrenciaBelongsJogador'})
  id_jogador: number;

  constructor(data?: Partial<Ocurrencia>) {
    super(data);
  }
}

export interface OcurrenciaRelations {
  // describe navigational properties here
}

export type OcurrenciaWithRelations = Ocurrencia & OcurrenciaRelations;
