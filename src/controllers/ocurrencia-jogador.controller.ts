import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Ocurrencia,
  Jogador,
} from '../models';
import {OcurrenciaRepository} from '../repositories';

export class OcurrenciaJogadorController {
  constructor(
    @repository(OcurrenciaRepository)
    public ocurrenciaRepository: OcurrenciaRepository,
  ) { }

  @get('/ocurrencias/{id}/jogador', {
    responses: {
      '200': {
        description: 'Jogador belonging to Ocurrencia',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Jogador)},
          },
        },
      },
    },
  })
  async getJogador(
    @param.path.number('id') id: typeof Ocurrencia.prototype.id,
  ): Promise<Jogador> {
    return this.ocurrenciaRepository.OcurrenciaBelongsJogador(id);
  }
}
