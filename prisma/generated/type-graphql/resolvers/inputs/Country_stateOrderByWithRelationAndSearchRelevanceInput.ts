import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CountryOrderByWithRelationAndSearchRelevanceInput";
import { Country_stateOrderByRelevanceInput } from "../inputs/Country_stateOrderByRelevanceInput";
import { Country_state_translationOrderByRelationAggregateInput } from "../inputs/Country_state_translationOrderByRelationAggregateInput";
import { Customer_addressOrderByRelationAggregateInput } from "../inputs/Customer_addressOrderByRelationAggregateInput";
import { Order_addressOrderByRelationAggregateInput } from "../inputs/Order_addressOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Country_stateOrderByWithRelationAndSearchRelevanceInput", {})
export class Country_stateOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => CountryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  country?: CountryOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  country_state_translation?: Country_state_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_addressOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_address?: Customer_addressOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressOrderByRelationAggregateInput, {
    nullable: true
  })
  order_address?: Order_addressOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Country_stateOrderByRelevanceInput | undefined;
}
