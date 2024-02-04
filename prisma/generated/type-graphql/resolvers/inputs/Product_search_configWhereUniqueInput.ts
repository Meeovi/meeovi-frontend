import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Product_search_configWhereInput } from "../inputs/Product_search_configWhereInput";
import { Product_search_config_fieldListRelationFilter } from "../inputs/Product_search_config_fieldListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Product_search_configWhereUniqueInput", {})
export class Product_search_configWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  language_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Product_search_configWhereInput], {
    nullable: true
  })
  AND?: Product_search_configWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_configWhereInput], {
    nullable: true
  })
  OR?: Product_search_configWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_configWhereInput], {
    nullable: true
  })
  NOT?: Product_search_configWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  and_logic?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  min_search_length?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  excluded_terms?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => Product_search_config_fieldListRelationFilter, {
    nullable: true
  })
  product_search_config_field?: Product_search_config_fieldListRelationFilter | undefined;
}
