import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";

@TypeGraphQL.InputType("Promotion_discount_pricesScalarWhereInput", {})
export class Promotion_discount_pricesScalarWhereInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_pricesScalarWhereInput], {
    nullable: true
  })
  AND?: Promotion_discount_pricesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesScalarWhereInput], {
    nullable: true
  })
  OR?: Promotion_discount_pricesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesScalarWhereInput], {
    nullable: true
  })
  NOT?: Promotion_discount_pricesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  discount_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  currency_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  price?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
