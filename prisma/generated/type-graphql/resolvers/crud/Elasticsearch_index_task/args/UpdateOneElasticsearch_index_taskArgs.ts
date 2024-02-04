import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Elasticsearch_index_taskUpdateInput } from "../../../inputs/Elasticsearch_index_taskUpdateInput";
import { Elasticsearch_index_taskWhereUniqueInput } from "../../../inputs/Elasticsearch_index_taskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneElasticsearch_index_taskArgs {
  @TypeGraphQL.Field(_type => Elasticsearch_index_taskUpdateInput, {
    nullable: false
  })
  data!: Elasticsearch_index_taskUpdateInput;

  @TypeGraphQL.Field(_type => Elasticsearch_index_taskWhereUniqueInput, {
    nullable: false
  })
  where!: Elasticsearch_index_taskWhereUniqueInput;
}
