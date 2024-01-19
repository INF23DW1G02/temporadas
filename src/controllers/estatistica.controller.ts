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
import {Estatistica} from '../models';
import {EstatisticaRepository} from '../repositories';

export class EstatisticaController {
  constructor(
    @repository(EstatisticaRepository)
    public estatisticaRepository : EstatisticaRepository,
  ) {}

  @post('/estatisticas')
  @response(200, {
    description: 'Estatistica model instance',
    content: {'application/json': {schema: getModelSchemaRef(Estatistica)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estatistica, {
            title: 'NewEstatistica',
            exclude: ['id'],
          }),
        },
      },
    })
    estatistica: Omit<Estatistica, 'id'>,
  ): Promise<Estatistica> {
    return this.estatisticaRepository.create(estatistica);
  }

  @get('/estatisticas/count')
  @response(200, {
    description: 'Estatistica model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Estatistica) where?: Where<Estatistica>,
  ): Promise<Count> {
    return this.estatisticaRepository.count(where);
  }

  @get('/estatisticas')
  @response(200, {
    description: 'Array of Estatistica model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Estatistica, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Estatistica) filter?: Filter<Estatistica>,
  ): Promise<Estatistica[]> {
    return this.estatisticaRepository.find(filter);
  }

  @patch('/estatisticas')
  @response(200, {
    description: 'Estatistica PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estatistica, {partial: true}),
        },
      },
    })
    estatistica: Estatistica,
    @param.where(Estatistica) where?: Where<Estatistica>,
  ): Promise<Count> {
    return this.estatisticaRepository.updateAll(estatistica, where);
  }

  @get('/estatisticas/{id}')
  @response(200, {
    description: 'Estatistica model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Estatistica, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Estatistica, {exclude: 'where'}) filter?: FilterExcludingWhere<Estatistica>
  ): Promise<Estatistica> {
    return this.estatisticaRepository.findById(id, filter);
  }

  @patch('/estatisticas/{id}')
  @response(204, {
    description: 'Estatistica PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estatistica, {partial: true}),
        },
      },
    })
    estatistica: Estatistica,
  ): Promise<void> {
    await this.estatisticaRepository.updateById(id, estatistica);
  }

  @put('/estatisticas/{id}')
  @response(204, {
    description: 'Estatistica PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estatistica: Estatistica,
  ): Promise<void> {
    await this.estatisticaRepository.replaceById(id, estatistica);
  }

  @del('/estatisticas/{id}')
  @response(204, {
    description: 'Estatistica DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estatisticaRepository.deleteById(id);
  }
}
