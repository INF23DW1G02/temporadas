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
import {Jogo} from '../models';
import {JogoRepository} from '../repositories';

export class JogoController {
  constructor(
    @repository(JogoRepository)
    public jogoRepository : JogoRepository,
  ) {}

  @post('/jogo')
  @response(200, {
    description: 'Jogo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Jogo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jogo, {
            title: 'NewJogo',
            exclude: ['id'],
          }),
        },
      },
    })
    jogo: Omit<Jogo, 'id'>,
  ): Promise<Jogo> {
    return this.jogoRepository.create(jogo);
  }

  @get('/jogo/count')
  @response(200, {
    description: 'Jogo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Jogo) where?: Where<Jogo>,
  ): Promise<Count> {
    return this.jogoRepository.count(where);
  }

  @get('/jogo')
  @response(200, {
    description: 'Array of Jogo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Jogo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Jogo) filter?: Filter<Jogo>,
  ): Promise<Jogo[]> {
    return this.jogoRepository.find(filter);
  }

  @patch('/jogo')
  @response(200, {
    description: 'Jogo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jogo, {partial: true}),
        },
      },
    })
    jogo: Jogo,
    @param.where(Jogo) where?: Where<Jogo>,
  ): Promise<Count> {
    return this.jogoRepository.updateAll(jogo, where);
  }

  @get('/jogo/{id}')
  @response(200, {
    description: 'Jogo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Jogo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Jogo, {exclude: 'where'}) filter?: FilterExcludingWhere<Jogo>
  ): Promise<Jogo> {
    return this.jogoRepository.findById(id, filter);
  }

  @patch('/jogo/{id}')
  @response(204, {
    description: 'Jogo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jogo, {partial: true}),
        },
      },
    })
    jogo: Jogo,
  ): Promise<void> {
    await this.jogoRepository.updateById(id, jogo);
  }

  @put('/jogo/{id}')
  @response(204, {
    description: 'Jogo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() jogo: Jogo,
  ): Promise<void> {
    await this.jogoRepository.replaceById(id, jogo);
  }

  @del('/jogo/{id}')
  @response(204, {
    description: 'Jogo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.jogoRepository.deleteById(id);
  }
}
