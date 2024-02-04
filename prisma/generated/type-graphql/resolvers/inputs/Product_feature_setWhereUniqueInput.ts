import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { Product_feature_setWhereInput } from "../inputs/Product_feature_setWhereInput";
import { Product_feature_set_translationListRelationFilter } from "../inputs/Product_feature_set_translationListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Product_feature_setWhereUniqueInput", {})
export class Product_feature_setWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_setWhereInput], {
    nullable: true
  })
  AND?: Product_feature_setWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_setWhereInput], {
    nullable: true
  })
  OR?: Product_feature_setWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_feature_setWhereInput], {
    nullable: true
  })
  NOT?: Product_feature_setWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  features?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  product?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationListRelationFilter, {
    nullable: true
  })
  product_feature_set_translation?: Product_feature_set_translationListRelationFilter | undefined;
}
