import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MediaNullableRelationFilter } from "../inputs/MediaNullableRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_configurator_settingWhereInput } from "../inputs/Product_configurator_settingWhereInput";
import { Property_group_optionRelationFilter } from "../inputs/Property_group_optionRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { product_configurator_settingIdVersion_idCompoundUniqueInput } from "../inputs/product_configurator_settingIdVersion_idCompoundUniqueInput";
import { product_configurator_settingProduct_idVersion_idProperty_group_option_idCompoundUniqueInput } from "../inputs/product_configurator_settingProduct_idVersion_idProperty_group_option_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_configurator_settingWhereUniqueInput", {})
export class Product_configurator_settingWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_configurator_settingProduct_idVersion_idProperty_group_option_idCompoundUniqueInput, {
    nullable: true
  })
  product_id_version_id_property_group_option_id?: product_configurator_settingProduct_idVersion_idProperty_group_option_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => product_configurator_settingIdVersion_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id?: product_configurator_settingIdVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereInput], {
    nullable: true
  })
  AND?: Product_configurator_settingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereInput], {
    nullable: true
  })
  OR?: Product_configurator_settingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereInput], {
    nullable: true
  })
  NOT?: Product_configurator_settingWhereInput[] | undefined;

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
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  property_group_option_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  price?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  media_id?: BytesNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => MediaNullableRelationFilter, {
    nullable: true
  })
  media?: MediaNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Property_group_optionRelationFilter, {
    nullable: true
  })
  property_group_option?: Property_group_optionRelationFilter | undefined;
}
