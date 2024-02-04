import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_priceWhereInput } from "../inputs/Product_priceWhereInput";
import { RuleRelationFilter } from "../inputs/RuleRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { product_priceIdVersion_idCompoundUniqueInput } from "../inputs/product_priceIdVersion_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_priceWhereUniqueInput", {})
export class Product_priceWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_priceIdVersion_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id?: product_priceIdVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereInput], {
    nullable: true
  })
  AND?: Product_priceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereInput], {
    nullable: true
  })
  OR?: Product_priceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereInput], {
    nullable: true
  })
  NOT?: Product_priceWhereInput[] | undefined;

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
  rule_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  price?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  quantity_start?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  quantity_end?: IntNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RuleRelationFilter, {
    nullable: true
  })
  rule?: RuleRelationFilter | undefined;
}
