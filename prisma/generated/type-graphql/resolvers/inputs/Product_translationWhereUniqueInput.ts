import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_translationWhereInput } from "../inputs/Product_translationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { product_translationProduct_idProduct_version_idLanguage_idCompoundUniqueInput } from "../inputs/product_translationProduct_idProduct_version_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_translationWhereUniqueInput", {})
export class Product_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_translationProduct_idProduct_version_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  product_id_product_version_id_language_id?: product_translationProduct_idProduct_version_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereInput], {
    nullable: true
  })
  AND?: Product_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereInput], {
    nullable: true
  })
  OR?: Product_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_translationWhereInput], {
    nullable: true
  })
  NOT?: Product_translationWhereInput[] | undefined;

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
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  keywords?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  pack_unit?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  slot_config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  pack_unit_plural?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_search_keywords?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;
}
