import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Product_search_configScalarWhereWithAggregatesInput", {})
export class Product_search_configScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Product_search_configScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Product_search_configScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_configScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Product_search_configScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_configScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Product_search_configScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  language_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  and_logic?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  min_search_length?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  excluded_terms?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
