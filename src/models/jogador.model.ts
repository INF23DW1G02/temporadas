import {Entity, belongsTo, hasMany, model, property} from '@loopback/repository';
import {Equipa} from './equipa.model';
import {Ocurrencia} from './ocorrencia.model';

@model()
export class Jogador extends Entity {
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

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  @belongsTo(() => Equipa, {name: 'JogadorBelongsEquipa'})
  id_equipa: number;

  @hasMany(() => Ocurrencia, {keyTo: 'id_jogador'})
  ocurrencias: Ocurrencia[];

  constructor(data?: Partial<Jogador>) {
    super(data);
  }
}

export interface JogadorRelations {
  // describe navigational properties here
}

export type JogadorWithRelations = Jogador & JogadorRelations;
