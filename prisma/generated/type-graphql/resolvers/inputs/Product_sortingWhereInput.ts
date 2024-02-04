import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Product_sorting_translationListRelationFilter } from "../inputs/Product_sorting_translationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Product_sortingWhereInput", {})
export class Product_sortingWhereInput {
  @TypeGraphQL.Field(_type => [Product_sortingWhereInput], {
    nullable: true
  })
  AND?: Product_sortingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sortingWhereInput], {
    nullable: true
  })
  OR?: Product_sortingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sortingWhereInput], {
    nullable: true
  })
  NOT?: Product_sortingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url_key?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  priority?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  fields?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  locked?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationListRelationFilter, {
    nullable: true
  })
  product_sorting_translation?: Product_sorting_translationListRelationFilter | undefined;
}
