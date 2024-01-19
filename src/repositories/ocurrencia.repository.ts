import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Ocurrencia, OcurrenciaRelations, Jogador} from '../models';
import {JogadorRepository} from './jogador.repository';

export class OcurrenciaRepository extends DefaultCrudRepository<
  Ocurrencia,
  typeof Ocurrencia.prototype.id,
  OcurrenciaRelations
> {

  public readonly OcurrenciaBelongsJogador: BelongsToAccessor<Jogador, typeof Ocurrencia.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('JogadorRepository') protected jogadorRepositoryGetter: Getter<JogadorRepository>,
  ) {
    super(Ocurrencia, dataSource);
    this.OcurrenciaBelongsJogador = this.createBelongsToAccessorFor('OcurrenciaBelongsJogador', jogadorRepositoryGetter,);
    this.registerInclusionResolver('OcurrenciaBelongsJogador', this.OcurrenciaBelongsJogador.inclusionResolver);
  }
}
