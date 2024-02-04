import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { Custom_fieldWhereInput } from "../inputs/Custom_fieldWhereInput";
import { Custom_field_setNullableRelationFilter } from "../inputs/Custom_field_setNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Product_search_config_fieldListRelationFilter } from "../inputs/Product_search_config_fieldListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Custom_fieldWhereUniqueInput", {})
export class Custom_fieldWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldWhereInput], {
    nullable: true
  })
  AND?: Custom_fieldWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldWhereInput], {
    nullable: true
  })
  OR?: Custom_fieldWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_fieldWhereInput], {
    nullable: true
  })
  NOT?: Custom_fieldWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  set_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  allow_customer_write?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  allow_cart_expose?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setNullableRelationFilter, {
    nullable: true
  })
  custom_field_set?: Custom_field_setNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldListRelationFilter, {
    nullable: true
  })
  product_search_config_field?: Product_search_config_fieldListRelationFilter | undefined;
}
