import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCountOrderByAggregateInput } from "../inputs/Country_translationCountOrderByAggregateInput";
import { Country_translationMaxOrderByAggregateInput } from "../inputs/Country_translationMaxOrderByAggregateInput";
import { Country_translationMinOrderByAggregateInput } from "../inputs/Country_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Country_translationOrderByWithAggregationInput", {})
export class Country_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_id?: "asc" | "desc" | undefined;

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
  address_format?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Country_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Country_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Country_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Country_translationMinOrderByAggregateInput | undefined;
}
