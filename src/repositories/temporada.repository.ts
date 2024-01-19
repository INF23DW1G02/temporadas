import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Temporada, TemporadaRelations} from '../models';

export class TemporadaRepository extends DefaultCrudRepository<
  Temporada,
  typeof Temporada.prototype.id,
  TemporadaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Temporada, dataSource);
  }
}
