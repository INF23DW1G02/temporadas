import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Temporada} from './temporada.model';
import {Jogo} from './jogo.model';

@model()
export class Equipa extends Entity {
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

  @belongsTo(() => Temporada, {name: 'Equipa_da_Temporada'})
  id_temporada: number;

  @hasMany(() => Jogo, {keyTo: 'id_equipa'})
  jogos: Jogo[];

  constructor(data?: Partial<Equipa>) {
    super(data);
  }
}

export interface EquipaRelations {
  // describe navigational properties here
}

export type EquipaWithRelations = Equipa & EquipaRelations;
