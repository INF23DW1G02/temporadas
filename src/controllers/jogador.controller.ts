import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Jogador} from '../models';
import {JogadorRepository} from '../repositories';

export class JogadorController {
  constructor(
    @repository(JogadorRepository)
    public jogadorRepository : JogadorRepository,
  ) {}

  @post('/jogador')
  @response(200, {
    description: 'Jogador model instance',
    content: {'application/json': {schema: getModelSchemaRef(Jogador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jogador, {
            title: 'NewJogador',
            exclude: ['id'],
          }),
        },
      },
    })
    jogador: Omit<Jogador, 'id'>,
  ): Promise<Jogador> {
    return this.jogadorRepository.create(jogador);
  }

  @get('/jogador/count')
  @response(200, {
    description: 'Jogador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Jogador) where?: Where<Jogador>,
  ): Promise<Count> {
    return this.jogadorRepository.count(where);
  }

  @get('/jogador')
  @response(200, {
    description: 'Array of Jogador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Jogador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Jogador) filter?: Filter<Jogador>,
  ): Promise<Jogador[]> {
    return this.jogadorRepository.find(filter);
  }

  @patch('/jogador')
  @response(200, {
    description: 'Jogador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jogador, {partial: true}),
        },
      },
    })
    jogador: Jogador,
    @param.where(Jogador) where?: Where<Jogador>,
  ): Promise<Count> {
    return this.jogadorRepository.updateAll(jogador, where);
  }

  @get('/jogador/{id}')
  @response(200, {
    description: 'Jogador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Jogador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Jogador, {exclude: 'where'}) filter?: FilterExcludingWhere<Jogador>
  ): Promise<Jogador> {
    return this.jogadorRepository.findById(id, filter);
  }

  @patch('/jogador/{id}')
  @response(204, {
    description: 'Jogador PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jogador, {partial: true}),
        },
      },
    })
    jogador: Jogador,
  ): Promise<void> {
    await this.jogadorRepository.updateById(id, jogador);
  }

  @put('/jogador/{id}')
  @response(204, {
    description: 'Jogador PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() jogador: Jogador,
  ): Promise<void> {
    await this.jogadorRepository.replaceById(id, jogador);
  }

  @del('/jogador/{id}')
  @response(204, {
    description: 'Jogador DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.jogadorRepository.deleteById(id);
  }
}
