import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionCountOrderByAggregateInput } from "../inputs/App_script_conditionCountOrderByAggregateInput";
import { App_script_conditionMaxOrderByAggregateInput } from "../inputs/App_script_conditionMaxOrderByAggregateInput";
import { App_script_conditionMinOrderByAggregateInput } from "../inputs/App_script_conditionMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_script_conditionOrderByWithAggregationInput", {})
export class App_script_conditionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  group?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  script?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  constraints?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_script_conditionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_script_conditionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_script_conditionMinOrderByAggregateInput | undefined;
}
