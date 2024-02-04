import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Product_keyword_dictionaryWhereInput", {})
export class Product_keyword_dictionaryWhereInput {
  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryWhereInput], {
    nullable: true
  })
  AND?: Product_keyword_dictionaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryWhereInput], {
    nullable: true
  })
  OR?: Product_keyword_dictionaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryWhereInput], {
    nullable: true
  })
  NOT?: Product_keyword_dictionaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  keyword?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  reversed?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
