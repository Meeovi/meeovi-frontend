import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Elasticsearch_index_taskCreateInput } from "../../../inputs/Elasticsearch_index_taskCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneElasticsearch_index_taskArgs {
  @TypeGraphQL.Field(_type => Elasticsearch_index_taskCreateInput, {
    nullable: false
  })
  data!: Elasticsearch_index_taskCreateInput;
}
