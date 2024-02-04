import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Elasticsearch_index_taskAvgOrderByAggregateInput } from "../inputs/Elasticsearch_index_taskAvgOrderByAggregateInput";
import { Elasticsearch_index_taskCountOrderByAggregateInput } from "../inputs/Elasticsearch_index_taskCountOrderByAggregateInput";
import { Elasticsearch_index_taskMaxOrderByAggregateInput } from "../inputs/Elasticsearch_index_taskMaxOrderByAggregateInput";
import { Elasticsearch_index_taskMinOrderByAggregateInput } from "../inputs/Elasticsearch_index_taskMinOrderByAggregateInput";
import { Elasticsearch_index_taskSumOrderByAggregateInput } from "../inputs/Elasticsearch_index_taskSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Elasticsearch_index_taskOrderByWithAggregationInput", {})
export class Elasticsearch_index_taskOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alias?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  entity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  doc_count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Elasticsearch_index_taskCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Elasticsearch_index_taskCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Elasticsearch_index_taskAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Elasticsearch_index_taskAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Elasticsearch_index_taskMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Elasticsearch_index_taskMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Elasticsearch_index_taskMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Elasticsearch_index_taskMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Elasticsearch_index_taskSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Elasticsearch_index_taskSumOrderByAggregateInput | undefined;
}
