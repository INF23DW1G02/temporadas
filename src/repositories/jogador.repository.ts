import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Jogador, JogadorRelations, Equipa, Ocurrencia} from '../models';
import {EquipaRepository} from './equipa.repository';
import {OcurrenciaRepository} from './ocurrencia.repository';

export class JogadorRepository extends DefaultCrudRepository<
  Jogador,
  typeof Jogador.prototype.id,
  JogadorRelations
> {

  public readonly JogadorBelongsEquipa: BelongsToAccessor<Equipa, typeof Jogador.prototype.id>;

  public readonly ocurrencias: HasManyRepositoryFactory<Ocurrencia, typeof Jogador.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('EquipaRepository') protected equipaRepositoryGetter: Getter<EquipaRepository>, @repository.getter('OcurrenciaRepository') protected ocurrenciaRepositoryGetter: Getter<OcurrenciaRepository>,
  ) {
    super(Jogador, dataSource);
    this.ocurrencias = this.createHasManyRepositoryFactoryFor('ocurrencias', ocurrenciaRepositoryGetter,);
    this.registerInclusionResolver('ocurrencias', this.ocurrencias.inclusionResolver);
    this.JogadorBelongsEquipa = this.createBelongsToAccessorFor('JogadorBelongsEquipa', equipaRepositoryGetter,);
    this.registerInclusionResolver('JogadorBelongsEquipa', this.JogadorBelongsEquipa.inclusionResolver);
  }
}
