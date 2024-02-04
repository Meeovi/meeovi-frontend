import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationCountOrderByAggregateInput } from "../inputs/App_script_condition_translationCountOrderByAggregateInput";
import { App_script_condition_translationMaxOrderByAggregateInput } from "../inputs/App_script_condition_translationMaxOrderByAggregateInput";
import { App_script_condition_translationMinOrderByAggregateInput } from "../inputs/App_script_condition_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_script_condition_translationOrderByWithAggregationInput", {})
export class App_script_condition_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_script_condition_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_script_condition_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_script_condition_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_script_condition_translationMinOrderByAggregateInput | undefined;
}
