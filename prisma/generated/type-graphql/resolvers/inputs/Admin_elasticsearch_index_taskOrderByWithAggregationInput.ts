import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Admin_elasticsearch_index_taskAvgOrderByAggregateInput } from "../inputs/Admin_elasticsearch_index_taskAvgOrderByAggregateInput";
import { Admin_elasticsearch_index_taskCountOrderByAggregateInput } from "../inputs/Admin_elasticsearch_index_taskCountOrderByAggregateInput";
import { Admin_elasticsearch_index_taskMaxOrderByAggregateInput } from "../inputs/Admin_elasticsearch_index_taskMaxOrderByAggregateInput";
import { Admin_elasticsearch_index_taskMinOrderByAggregateInput } from "../inputs/Admin_elasticsearch_index_taskMinOrderByAggregateInput";
import { Admin_elasticsearch_index_taskSumOrderByAggregateInput } from "../inputs/Admin_elasticsearch_index_taskSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Admin_elasticsearch_index_taskOrderByWithAggregationInput", {})
export class Admin_elasticsearch_index_taskOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Admin_elasticsearch_index_taskCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Admin_elasticsearch_index_taskAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Admin_elasticsearch_index_taskMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Admin_elasticsearch_index_taskMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Admin_elasticsearch_index_taskSumOrderByAggregateInput | undefined;
}
