import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Jogo, JogoRelations} from '../models';

export class JogoRepository extends DefaultCrudRepository<
  Jogo,
  typeof Jogo.prototype.id,
  JogoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Jogo, dataSource);
  }
}
