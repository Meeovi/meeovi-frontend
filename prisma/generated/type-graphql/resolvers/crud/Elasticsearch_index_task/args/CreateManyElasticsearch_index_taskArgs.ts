import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Elasticsearch_index_taskCreateManyInput } from "../../../inputs/Elasticsearch_index_taskCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyElasticsearch_index_taskArgs {
  @TypeGraphQL.Field(_type => [Elasticsearch_index_taskCreateManyInput], {
    nullable: false
  })
  data!: Elasticsearch_index_taskCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
