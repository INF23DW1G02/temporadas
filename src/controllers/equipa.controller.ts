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
import {Equipa} from '../models';
import {EquipaRepository} from '../repositories';

export class EquipaController {
  constructor(
    @repository(EquipaRepository)
    public equipaRepository : EquipaRepository,
  ) {}

  @post('/equipa')
  @response(200, {
    description: 'Equipa model instance',
    content: {'application/json': {schema: getModelSchemaRef(Equipa)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipa, {
            title: 'NewEquipa',
            exclude: ['id'],
          }),
        },
      },
    })
    equipa: Omit<Equipa, 'id'>,
  ): Promise<Equipa> {
    return this.equipaRepository.create(equipa);
  }

  @get('/equipa/count')
  @response(200, {
    description: 'Equipa model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Equipa) where?: Where<Equipa>,
  ): Promise<Count> {
    return this.equipaRepository.count(where);
  }

  @get('/equipa')
  @response(200, {
    description: 'Array of Equipa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Equipa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Equipa) filter?: Filter<Equipa>,
  ): Promise<Equipa[]> {
    return this.equipaRepository.find(filter);
  }

  @patch('/equipa')
  @response(200, {
    description: 'Equipa PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipa, {partial: true}),
        },
      },
    })
    equipa: Equipa,
    @param.where(Equipa) where?: Where<Equipa>,
  ): Promise<Count> {
    return this.equipaRepository.updateAll(equipa, where);
  }

  @get('/equipa/{id}')
  @response(200, {
    description: 'Equipa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Equipa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Equipa, {exclude: 'where'}) filter?: FilterExcludingWhere<Equipa>
  ): Promise<Equipa> {
    return this.equipaRepository.findById(id, filter);
  }

  @patch('/equipa/{id}')
  @response(204, {
    description: 'Equipa PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipa, {partial: true}),
        },
      },
    })
    equipa: Equipa,
  ): Promise<void> {
    await this.equipaRepository.updateById(id, equipa);
  }

  @put('/equipa/{id}')
  @response(204, {
    description: 'Equipa PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() equipa: Equipa,
  ): Promise<void> {
    await this.equipaRepository.replaceById(id, equipa);
  }

  @del('/equipa/{id}')
  @response(204, {
    description: 'Equipa DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.equipaRepository.deleteById(id);
  }
}
