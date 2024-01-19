import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Equipa, EquipaRelations, Temporada, Jogo} from '../models';
import {TemporadaRepository} from './temporada.repository';
import {JogoRepository} from './jogo.repository';

export class EquipaRepository extends DefaultCrudRepository<
  Equipa,
  typeof Equipa.prototype.id,
  EquipaRelations
> {

  public readonly Equipa_da_Temporada: BelongsToAccessor<Temporada, typeof Equipa.prototype.id>;

  public readonly jogos: HasManyRepositoryFactory<Jogo, typeof Equipa.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('TemporadaRepository') protected temporadaRepositoryGetter: Getter<TemporadaRepository>, @repository.getter('JogoRepository') protected jogoRepositoryGetter: Getter<JogoRepository>,
  ) {
    super(Equipa, dataSource);
    this.jogos = this.createHasManyRepositoryFactoryFor('jogos', jogoRepositoryGetter,);
    this.registerInclusionResolver('jogos', this.jogos.inclusionResolver);
    this.Equipa_da_Temporada = this.createBelongsToAccessorFor('Equipa_da_Temporada', temporadaRepositoryGetter,);
    this.registerInclusionResolver('Equipa_da_Temporada', this.Equipa_da_Temporada.inclusionResolver);
  }
}
