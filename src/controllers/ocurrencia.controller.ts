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
import {Ocurrencia} from '../models';
import {OcurrenciaRepository} from '../repositories';

export class OcurrenciaController {
  constructor(
    @repository(OcurrenciaRepository)
    public ocurrenciaRepository : OcurrenciaRepository,
  ) {}

  @post('/ocurrencia')
  @response(200, {
    description: 'Ocurrencia model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ocurrencia)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ocurrencia, {
            title: 'NewOcurrencia',
            exclude: ['id'],
          }),
        },
      },
    })
    ocurrencia: Omit<Ocurrencia, 'id'>,
  ): Promise<Ocurrencia> {
    return this.ocurrenciaRepository.create(ocurrencia);
  }

  @get('/ocurrencia/count')
  @response(200, {
    description: 'Ocurrencia model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ocurrencia) where?: Where<Ocurrencia>,
  ): Promise<Count> {
    return this.ocurrenciaRepository.count(where);
  }

  @get('/ocurrencia')
  @response(200, {
    description: 'Array of Ocurrencia model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ocurrencia, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ocurrencia) filter?: Filter<Ocurrencia>,
  ): Promise<Ocurrencia[]> {
    return this.ocurrenciaRepository.find(filter);
  }

  @patch('/ocurrencia')
  @response(200, {
    description: 'Ocurrencia PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ocurrencia, {partial: true}),
        },
      },
    })
    ocurrencia: Ocurrencia,
    @param.where(Ocurrencia) where?: Where<Ocurrencia>,
  ): Promise<Count> {
    return this.ocurrenciaRepository.updateAll(ocurrencia, where);
  }

  @get('/ocurrencia/{id}')
  @response(200, {
    description: 'Ocurrencia model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ocurrencia, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Ocurrencia, {exclude: 'where'}) filter?: FilterExcludingWhere<Ocurrencia>
  ): Promise<Ocurrencia> {
    return this.ocurrenciaRepository.findById(id, filter);
  }

  @patch('/ocurrencia/{id}')
  @response(204, {
    description: 'Ocurrencia PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ocurrencia, {partial: true}),
        },
      },
    })
    ocurrencia: Ocurrencia,
  ): Promise<void> {
    await this.ocurrenciaRepository.updateById(id, ocurrencia);
  }

  @put('/ocurrencia/{id}')
  @response(204, {
    description: 'Ocurrencia PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ocurrencia: Ocurrencia,
  ): Promise<void> {
    await this.ocurrenciaRepository.replaceById(id, ocurrencia);
  }

  @del('/ocurrencia/{id}')
  @response(204, {
    description: 'Ocurrencia DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ocurrenciaRepository.deleteById(id);
  }
}
