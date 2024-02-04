import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CountryOrderByWithRelationAndSearchRelevanceInput";
import { Country_stateOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Country_stateOrderByWithRelationAndSearchRelevanceInput";
import { CustomerOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CustomerOrderByWithRelationAndSearchRelevanceInput";
import { Customer_addressOrderByRelevanceInput } from "../inputs/Customer_addressOrderByRelevanceInput";
import { SalutationOrderByWithRelationAndSearchRelevanceInput } from "../inputs/SalutationOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_addressOrderByWithRelationAndSearchRelevanceInput", {})
export class Customer_addressOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  country_state_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  company?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  department?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  salutation_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  street?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  zipcode?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  phone_number?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  additional_address_line1?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  additional_address_line2?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => CountryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  country?: CountryOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  country_state?: Country_stateOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customer?: CustomerOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SalutationOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  salutation?: SalutationOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Customer_addressOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Customer_addressOrderByRelevanceInput | undefined;
}
