import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { CountryRelationFilter } from "../inputs/CountryRelationFilter";
import { Country_state_translationListRelationFilter } from "../inputs/Country_state_translationListRelationFilter";
import { Customer_addressListRelationFilter } from "../inputs/Customer_addressListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Order_addressListRelationFilter } from "../inputs/Order_addressListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Country_stateWhereInput", {})
export class Country_stateWhereInput {
  @TypeGraphQL.Field(_type => [Country_stateWhereInput], {
    nullable: true
  })
  AND?: Country_stateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateWhereInput], {
    nullable: true
  })
  OR?: Country_stateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_stateWhereInput], {
    nullable: true
  })
  NOT?: Country_stateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  country_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  short_code?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CountryRelationFilter, {
    nullable: true
  })
  country?: CountryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationListRelationFilter, {
    nullable: true
  })
  country_state_translation?: Country_state_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_addressListRelationFilter, {
    nullable: true
  })
  customer_address?: Customer_addressListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_addressListRelationFilter, {
    nullable: true
  })
  order_address?: Order_addressListRelationFilter | undefined;
}
