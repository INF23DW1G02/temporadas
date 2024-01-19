import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Estatistica, EstatisticaRelations} from '../models';

export class EstatisticaRepository extends DefaultCrudRepository<
  Estatistica,
  typeof Estatistica.prototype.id,
  EstatisticaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Estatistica, dataSource);
  }
}
