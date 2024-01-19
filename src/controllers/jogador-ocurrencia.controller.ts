import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Jogador,
  Ocurrencia,
} from '../models';
import {JogadorRepository} from '../repositories';

export class JogadorOcurrenciaController {
  constructor(
    @repository(JogadorRepository) protected jogadorRepository: JogadorRepository,
  ) { }

  @get('/jogadors/{id}/ocurrencias', {
    responses: {
      '200': {
        description: 'Array of Jogador has many Ocurrencia',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ocurrencia)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Ocurrencia>,
  ): Promise<Ocurrencia[]> {
    return this.jogadorRepository.ocurrencias(id).find(filter);
  }

  @post('/jogadors/{id}/ocurrencias', {
    responses: {
      '200': {
        description: 'Jogador model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ocurrencia)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Jogador.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ocurrencia, {
            title: 'NewOcurrenciaInJogador',
            exclude: ['id'],
            optional: ['id_jogador']
          }),
        },
      },
    }) ocurrencia: Omit<Ocurrencia, 'id'>,
  ): Promise<Ocurrencia> {
    return this.jogadorRepository.ocurrencias(id).create(ocurrencia);
  }

  @patch('/jogadors/{id}/ocurrencias', {
    responses: {
      '200': {
        description: 'Jogador.Ocurrencia PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ocurrencia, {partial: true}),
        },
      },
    })
    ocurrencia: Partial<Ocurrencia>,
    @param.query.object('where', getWhereSchemaFor(Ocurrencia)) where?: Where<Ocurrencia>,
  ): Promise<Count> {
    return this.jogadorRepository.ocurrencias(id).patch(ocurrencia, where);
  }

  @del('/jogadors/{id}/ocurrencias', {
    responses: {
      '200': {
        description: 'Jogador.Ocurrencia DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Ocurrencia)) where?: Where<Ocurrencia>,
  ): Promise<Count> {
    return this.jogadorRepository.ocurrencias(id).delete(where);
  }
}
