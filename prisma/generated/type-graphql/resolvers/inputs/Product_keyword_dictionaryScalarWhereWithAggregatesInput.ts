import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Product_keyword_dictionaryScalarWhereWithAggregatesInput", {})
export class Product_keyword_dictionaryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_keyword_dictionaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_keyword_dictionaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_keyword_dictionaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  language_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  keyword?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  reversed?: StringNullableWithAggregatesFilter | undefined;
}
