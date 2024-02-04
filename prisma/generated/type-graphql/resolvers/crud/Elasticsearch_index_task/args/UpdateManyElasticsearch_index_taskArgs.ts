import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Elasticsearch_index_taskUpdateManyMutationInput } from "../../../inputs/Elasticsearch_index_taskUpdateManyMutationInput";
import { Elasticsearch_index_taskWhereInput } from "../../../inputs/Elasticsearch_index_taskWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyElasticsearch_index_taskArgs {
  @TypeGraphQL.Field(_type => Elasticsearch_index_taskUpdateManyMutationInput, {
    nullable: false
  })
  data!: Elasticsearch_index_taskUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Elasticsearch_index_taskWhereInput, {
    nullable: true
  })
  where?: Elasticsearch_index_taskWhereInput | undefined;
}
