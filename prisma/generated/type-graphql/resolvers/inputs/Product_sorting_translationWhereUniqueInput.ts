import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Product_sortingRelationFilter } from "../inputs/Product_sortingRelationFilter";
import { Product_sorting_translationWhereInput } from "../inputs/Product_sorting_translationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { product_sorting_translationProduct_sorting_idLanguage_idCompoundUniqueInput } from "../inputs/product_sorting_translationProduct_sorting_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_sorting_translationWhereUniqueInput", {})
export class Product_sorting_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_sorting_translationProduct_sorting_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  product_sorting_id_language_id?: product_sorting_translationProduct_sorting_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereInput], {
    nullable: true
  })
  AND?: Product_sorting_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereInput], {
    nullable: true
  })
  OR?: Product_sorting_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationWhereInput], {
    nullable: true
  })
  NOT?: Product_sorting_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_sorting_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  label?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => Product_sortingRelationFilter, {
    nullable: true
  })
  product_sorting?: Product_sortingRelationFilter | undefined;
}
