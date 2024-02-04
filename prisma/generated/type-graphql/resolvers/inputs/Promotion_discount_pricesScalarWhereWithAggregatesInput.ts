import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";

@TypeGraphQL.InputType("Promotion_discount_pricesScalarWhereWithAggregatesInput", {})
export class Promotion_discount_pricesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_pricesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Promotion_discount_pricesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Promotion_discount_pricesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Promotion_discount_pricesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  discount_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  currency_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  price?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
