import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Jogador,
  Equipa,
} from '../models';
import {JogadorRepository} from '../repositories';

export class JogadorEquipaController {
  constructor(
    @repository(JogadorRepository)
    public jogadorRepository: JogadorRepository,
  ) { }

  @get('/jogadors/{id}/equipa', {
    responses: {
      '200': {
        description: 'Equipa belonging to Jogador',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Equipa)},
          },
        },
      },
    },
  })
  async getEquipa(
    @param.path.number('id') id: typeof Jogador.prototype.id,
  ): Promise<Equipa> {
    return this.jogadorRepository.JogadorBelongsEquipa(id);
  }
}
