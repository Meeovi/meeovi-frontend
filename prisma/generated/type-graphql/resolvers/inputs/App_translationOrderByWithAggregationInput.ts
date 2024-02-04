import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationCountOrderByAggregateInput } from "../inputs/App_translationCountOrderByAggregateInput";
import { App_translationMaxOrderByAggregateInput } from "../inputs/App_translationMaxOrderByAggregateInput";
import { App_translationMinOrderByAggregateInput } from "../inputs/App_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_translationOrderByWithAggregationInput", {})
export class App_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  label?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  privacy_policy_extensions?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_translationMinOrderByAggregateInput | undefined;
}
