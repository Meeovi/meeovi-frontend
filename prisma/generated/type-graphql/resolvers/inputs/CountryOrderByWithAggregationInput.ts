import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryAvgOrderByAggregateInput } from "../inputs/CountryAvgOrderByAggregateInput";
import { CountryCountOrderByAggregateInput } from "../inputs/CountryCountOrderByAggregateInput";
import { CountryMaxOrderByAggregateInput } from "../inputs/CountryMaxOrderByAggregateInput";
import { CountryMinOrderByAggregateInput } from "../inputs/CountryMinOrderByAggregateInput";
import { CountrySumOrderByAggregateInput } from "../inputs/CountrySumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CountryOrderByWithAggregationInput", {})
export class CountryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  iso?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tax_free?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  iso3?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  display_state_in_registration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  force_state_in_registration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  company_tax_free?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  check_vat_id_pattern?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  vat_id_pattern?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  vat_id_required?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  customer_tax?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  company_tax?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  advanced_postal_code_pattern?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  check_advanced_postal_code_pattern?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  check_postal_code_pattern?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  default_postal_code_pattern?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postal_code_required?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_available?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CountryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CountryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CountryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CountryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CountryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountrySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CountrySumOrderByAggregateInput | undefined;
}
