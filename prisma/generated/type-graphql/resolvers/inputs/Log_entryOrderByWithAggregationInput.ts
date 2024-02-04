import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Log_entryAvgOrderByAggregateInput } from "../inputs/Log_entryAvgOrderByAggregateInput";
import { Log_entryCountOrderByAggregateInput } from "../inputs/Log_entryCountOrderByAggregateInput";
import { Log_entryMaxOrderByAggregateInput } from "../inputs/Log_entryMaxOrderByAggregateInput";
import { Log_entryMinOrderByAggregateInput } from "../inputs/Log_entryMinOrderByAggregateInput";
import { Log_entrySumOrderByAggregateInput } from "../inputs/Log_entrySumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Log_entryOrderByWithAggregationInput", {})
export class Log_entryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  channel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  context?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  extra?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Log_entryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Log_entryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Log_entryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Log_entryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Log_entryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Log_entryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Log_entryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Log_entryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Log_entrySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Log_entrySumOrderByAggregateInput | undefined;
}
