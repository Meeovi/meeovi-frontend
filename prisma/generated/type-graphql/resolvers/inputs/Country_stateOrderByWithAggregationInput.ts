import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateAvgOrderByAggregateInput } from "../inputs/Country_stateAvgOrderByAggregateInput";
import { Country_stateCountOrderByAggregateInput } from "../inputs/Country_stateCountOrderByAggregateInput";
import { Country_stateMaxOrderByAggregateInput } from "../inputs/Country_stateMaxOrderByAggregateInput";
import { Country_stateMinOrderByAggregateInput } from "../inputs/Country_stateMinOrderByAggregateInput";
import { Country_stateSumOrderByAggregateInput } from "../inputs/Country_stateSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Country_stateOrderByWithAggregationInput", {})
export class Country_stateOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  short_code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Country_stateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Country_stateAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Country_stateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Country_stateMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Country_stateSumOrderByAggregateInput | undefined;
}
