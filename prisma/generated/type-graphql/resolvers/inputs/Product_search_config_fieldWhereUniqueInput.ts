import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { Custom_fieldNullableRelationFilter } from "../inputs/Custom_fieldNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Product_search_configRelationFilter } from "../inputs/Product_search_configRelationFilter";
import { Product_search_config_fieldWhereInput } from "../inputs/Product_search_config_fieldWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { product_search_config_fieldFieldProduct_search_config_idCompoundUniqueInput } from "../inputs/product_search_config_fieldFieldProduct_search_config_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_search_config_fieldWhereUniqueInput", {})
export class Product_search_config_fieldWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => product_search_config_fieldFieldProduct_search_config_idCompoundUniqueInput, {
    nullable: true
  })
  field_product_search_config_id?: product_search_config_fieldFieldProduct_search_config_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldWhereInput], {
    nullable: true
  })
  AND?: Product_search_config_fieldWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldWhereInput], {
    nullable: true
  })
  OR?: Product_search_config_fieldWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_config_fieldWhereInput], {
    nullable: true
  })
  NOT?: Product_search_config_fieldWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_search_config_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  custom_field_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  field?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  tokenize?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  searchable?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ranking?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldNullableRelationFilter, {
    nullable: true
  })
  custom_field?: Custom_fieldNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_search_configRelationFilter, {
    nullable: true
  })
  product_search_config?: Product_search_configRelationFilter | undefined;
}
