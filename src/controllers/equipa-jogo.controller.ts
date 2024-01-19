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
  Equipa,
  Jogo,
} from '../models';
import {EquipaRepository} from '../repositories';

export class EquipaJogoController {
  constructor(
    @repository(EquipaRepository) protected equipaRepository: EquipaRepository,
  ) { }

  @get('/equipas/{id}/jogos', {
    responses: {
      '200': {
        description: 'Array of Equipa has many Jogo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Jogo)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Jogo>,
  ): Promise<Jogo[]> {
    return this.equipaRepository.jogos(id).find(filter);
  }

  @post('/equipas/{id}/jogos', {
    responses: {
      '200': {
        description: 'Equipa model instance',
        content: {'application/json': {schema: getModelSchemaRef(Jogo)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Equipa.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jogo, {
            title: 'NewJogoInEquipa',
            exclude: ['id'],
            optional: ['id_equipa']
          }),
        },
      },
    }) jogo: Omit<Jogo, 'id'>,
  ): Promise<Jogo> {
    return this.equipaRepository.jogos(id).create(jogo);
  }

  @patch('/equipas/{id}/jogos', {
    responses: {
      '200': {
        description: 'Equipa.Jogo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jogo, {partial: true}),
        },
      },
    })
    jogo: Partial<Jogo>,
    @param.query.object('where', getWhereSchemaFor(Jogo)) where?: Where<Jogo>,
  ): Promise<Count> {
    return this.equipaRepository.jogos(id).patch(jogo, where);
  }

  @del('/equipas/{id}/jogos', {
    responses: {
      '200': {
        description: 'Equipa.Jogo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Jogo)) where?: Where<Jogo>,
  ): Promise<Count> {
    return this.equipaRepository.jogos(id).delete(where);
  }
}
