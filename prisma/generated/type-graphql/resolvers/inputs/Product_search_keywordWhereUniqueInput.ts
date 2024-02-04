import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_search_keywordWhereInput } from "../inputs/Product_search_keywordWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { product_search_keywordIdVersion_idLanguage_idCompoundUniqueInput } from "../inputs/product_search_keywordIdVersion_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_search_keywordWhereUniqueInput", {})
export class Product_search_keywordWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_search_keywordIdVersion_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id_language_id?: product_search_keywordIdVersion_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordWhereInput], {
    nullable: true
  })
  AND?: Product_search_keywordWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordWhereInput], {
    nullable: true
  })
  OR?: Product_search_keywordWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordWhereInput], {
    nullable: true
  })
  NOT?: Product_search_keywordWhereInput[] | undefined;

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
  language_id?: BytesFilter | undefined;

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
  keyword?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  ranking?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;
}
