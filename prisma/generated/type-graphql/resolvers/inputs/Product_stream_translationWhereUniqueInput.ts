import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Product_streamRelationFilter } from "../inputs/Product_streamRelationFilter";
import { Product_stream_translationWhereInput } from "../inputs/Product_stream_translationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { product_stream_translationProduct_stream_idLanguage_idCompoundUniqueInput } from "../inputs/product_stream_translationProduct_stream_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_stream_translationWhereUniqueInput", {})
export class Product_stream_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_stream_translationProduct_stream_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  product_stream_id_language_id?: product_stream_translationProduct_stream_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereInput], {
    nullable: true
  })
  AND?: Product_stream_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereInput], {
    nullable: true
  })
  OR?: Product_stream_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_translationWhereInput], {
    nullable: true
  })
  NOT?: Product_stream_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_stream_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_streamRelationFilter, {
    nullable: true
  })
  product_stream?: Product_streamRelationFilter | undefined;
}
