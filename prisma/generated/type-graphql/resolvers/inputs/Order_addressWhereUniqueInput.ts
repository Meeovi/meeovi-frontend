import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { CountryRelationFilter } from "../inputs/CountryRelationFilter";
import { Country_stateNullableRelationFilter } from "../inputs/Country_stateNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { Order_addressWhereInput } from "../inputs/Order_addressWhereInput";
import { Order_deliveryListRelationFilter } from "../inputs/Order_deliveryListRelationFilter";
import { SalutationNullableRelationFilter } from "../inputs/SalutationNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { order_addressIdVersion_idCompoundUniqueInput } from "../inputs/order_addressIdVersion_idCompoundUniqueInput";

@TypeGraphQL.InputType("Order_addressWhereUniqueInput", {})
export class Order_addressWhereUniqueInput {
  @TypeGraphQL.Field(_type => order_addressIdVersion_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id?: order_addressIdVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereInput], {
    nullable: true
  })
  AND?: Order_addressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereInput], {
    nullable: true
  })
  OR?: Order_addressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereInput], {
    nullable: true
  })
  NOT?: Order_addressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  country_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  country_state_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  company?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  department?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  salutation_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  last_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  street?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  zipcode?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  city?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  vat_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phone_number?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  additional_address_line1?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  additional_address_line2?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => Country_stateNullableRelationFilter, {
    nullable: true
  })
  country_state?: Country_stateNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  order?: OrderRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SalutationNullableRelationFilter, {
    nullable: true
  })
  salutation?: SalutationNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryListRelationFilter, {
    nullable: true
  })
  order_delivery?: Order_deliveryListRelationFilter | undefined;
}
