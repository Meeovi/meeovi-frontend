import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Klarna_order_extensionWhereInput", {})
export class Klarna_order_extensionWhereInput {
  @TypeGraphQL.Field(_type => [Klarna_order_extensionWhereInput], {
    nullable: true
  })
  AND?: Klarna_order_extensionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionWhereInput], {
    nullable: true
  })
  OR?: Klarna_order_extensionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionWhereInput], {
    nullable: true
  })
  NOT?: Klarna_order_extensionWhereInput[] | undefined;

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
  order_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  order_address_hash?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  order_cart_hash?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  order_cart_hash_version?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  order?: OrderRelationFilter | undefined;
}
