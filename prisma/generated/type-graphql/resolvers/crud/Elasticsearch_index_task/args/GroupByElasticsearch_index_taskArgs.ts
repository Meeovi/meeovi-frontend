import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Elasticsearch_index_taskOrderByWithAggregationInput } from "../../../inputs/Elasticsearch_index_taskOrderByWithAggregationInput";
import { Elasticsearch_index_taskScalarWhereWithAggregatesInput } from "../../../inputs/Elasticsearch_index_taskScalarWhereWithAggregatesInput";
import { Elasticsearch_index_taskWhereInput } from "../../../inputs/Elasticsearch_index_taskWhereInput";
import { Elasticsearch_index_taskScalarFieldEnum } from "../../../../enums/Elasticsearch_index_taskScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByElasticsearch_index_taskArgs {
  @TypeGraphQL.Field(_type => Elasticsearch_index_taskWhereInput, {
    nullable: true
  })
  where?: Elasticsearch_index_taskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Elasticsearch_index_taskOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Elasticsearch_index_taskOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Elasticsearch_index_taskScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "index" | "alias" | "entity" | "doc_count">;

  @TypeGraphQL.Field(_type => Elasticsearch_index_taskScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Elasticsearch_index_taskScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
