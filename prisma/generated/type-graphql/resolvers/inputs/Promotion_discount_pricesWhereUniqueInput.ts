import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CurrencyRelationFilter } from "../inputs/CurrencyRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { Promotion_discountRelationFilter } from "../inputs/Promotion_discountRelationFilter";
import { Promotion_discount_pricesWhereInput } from "../inputs/Promotion_discount_pricesWhereInput";

@TypeGraphQL.InputType("Promotion_discount_pricesWhereUniqueInput", {})
export class Promotion_discount_pricesWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesWhereInput], {
    nullable: true
  })
  AND?: Promotion_discount_pricesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesWhereInput], {
    nullable: true
  })
  OR?: Promotion_discount_pricesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_pricesWhereInput], {
    nullable: true
  })
  NOT?: Promotion_discount_pricesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => CurrencyRelationFilter, {
    nullable: true
  })
  currency?: CurrencyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Promotion_discountRelationFilter, {
    nullable: true
  })
  promotion_discount?: Promotion_discountRelationFilter | undefined;
}
