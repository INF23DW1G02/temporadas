import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Equipa,
  Temporada,
} from '../models';
import {EquipaRepository} from '../repositories';

export class EquipaTemporadaController {
  constructor(
    @repository(EquipaRepository)
    public equipaRepository: EquipaRepository,
  ) { }

  @get('/equipas/{id}/temporada', {
    responses: {
      '200': {
        description: 'Temporada belonging to Equipa',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Temporada)},
          },
        },
      },
    },
  })
  async getTemporada(
    @param.path.number('id') id: typeof Equipa.prototype.id,
  ): Promise<Temporada> {
    return this.equipaRepository.Equipa_da_Temporada(id);
  }
}
