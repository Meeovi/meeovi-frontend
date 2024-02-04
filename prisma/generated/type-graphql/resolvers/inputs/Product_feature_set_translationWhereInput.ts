import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Product_feature_setRelationFilter } from "../inputs/Product_feature_setRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Product_feature_set_translationWhereInput", {})
export class Product_feature_set_translationWhereInput {
  @TypeGraphQL.Field(_type => [Product_feature_set_translationWhereInput], {
    nullable: true
  })
  AND?: Product_feature_set_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationWhereInput], {
    nullable: true
  })
  OR?: Product_feature_set_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_set_translationWhereInput], {
    nullable: true
  })
  NOT?: Product_feature_set_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_feature_set_id?: BytesFilter | undefined;

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

  @TypeGraphQL.Field(_type => Product_feature_setRelationFilter, {
    nullable: true
  })
  product_feature_set?: Product_feature_setRelationFilter | undefined;
}
