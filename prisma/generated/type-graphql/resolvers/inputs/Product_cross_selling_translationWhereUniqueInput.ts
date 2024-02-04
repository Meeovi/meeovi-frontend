import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Product_cross_sellingRelationFilter } from "../inputs/Product_cross_sellingRelationFilter";
import { Product_cross_selling_translationWhereInput } from "../inputs/Product_cross_selling_translationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { product_cross_selling_translationProduct_cross_selling_idLanguage_idCompoundUniqueInput } from "../inputs/product_cross_selling_translationProduct_cross_selling_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_cross_selling_translationWhereUniqueInput", {})
export class Product_cross_selling_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_cross_selling_translationProduct_cross_selling_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  product_cross_selling_id_language_id?: product_cross_selling_translationProduct_cross_selling_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationWhereInput], {
    nullable: true
  })
  AND?: Product_cross_selling_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationWhereInput], {
    nullable: true
  })
  OR?: Product_cross_selling_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationWhereInput], {
    nullable: true
  })
  NOT?: Product_cross_selling_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_cross_selling_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => Product_cross_sellingRelationFilter, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingRelationFilter | undefined;
}
