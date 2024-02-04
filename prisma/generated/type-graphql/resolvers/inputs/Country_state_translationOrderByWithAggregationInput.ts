import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationCountOrderByAggregateInput } from "../inputs/Country_state_translationCountOrderByAggregateInput";
import { Country_state_translationMaxOrderByAggregateInput } from "../inputs/Country_state_translationMaxOrderByAggregateInput";
import { Country_state_translationMinOrderByAggregateInput } from "../inputs/Country_state_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Country_state_translationOrderByWithAggregationInput", {})
export class Country_state_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_state_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Country_state_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Country_state_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Country_state_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Country_state_translationMinOrderByAggregateInput | undefined;
}
