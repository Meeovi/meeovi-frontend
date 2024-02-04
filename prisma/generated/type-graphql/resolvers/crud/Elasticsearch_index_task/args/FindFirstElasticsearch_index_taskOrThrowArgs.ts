import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Elasticsearch_index_taskOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Elasticsearch_index_taskOrderByWithRelationAndSearchRelevanceInput";
import { Elasticsearch_index_taskWhereInput } from "../../../inputs/Elasticsearch_index_taskWhereInput";
import { Elasticsearch_index_taskWhereUniqueInput } from "../../../inputs/Elasticsearch_index_taskWhereUniqueInput";
import { Elasticsearch_index_taskScalarFieldEnum } from "../../../../enums/Elasticsearch_index_taskScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstElasticsearch_index_taskOrThrowArgs {
  @TypeGraphQL.Field(_type => Elasticsearch_index_taskWhereInput, {
    nullable: true
  })
  where?: Elasticsearch_index_taskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Elasticsearch_index_taskOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Elasticsearch_index_taskOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Elasticsearch_index_taskWhereUniqueInput, {
    nullable: true
  })
  cursor?: Elasticsearch_index_taskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Elasticsearch_index_taskScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "index" | "alias" | "entity" | "doc_count"> | undefined;
}
