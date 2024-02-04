import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_cross_selling_assigned_productsListRelationFilter } from "../inputs/Product_cross_selling_assigned_productsListRelationFilter";
import { Product_cross_selling_translationListRelationFilter } from "../inputs/Product_cross_selling_translationListRelationFilter";
import { Product_streamNullableRelationFilter } from "../inputs/Product_streamNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Product_cross_sellingWhereInput", {})
export class Product_cross_sellingWhereInput {
  @TypeGraphQL.Field(_type => [Product_cross_sellingWhereInput], {
    nullable: true
  })
  AND?: Product_cross_sellingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingWhereInput], {
    nullable: true
  })
  OR?: Product_cross_sellingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingWhereInput], {
    nullable: true
  })
  NOT?: Product_cross_sellingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sort_by?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sort_direction?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  active?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  limit?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  product_stream_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_streamNullableRelationFilter, {
    nullable: true
  })
  product_stream?: Product_streamNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsListRelationFilter, {
    nullable: true
  })
  product_cross_selling_assigned_products?: Product_cross_selling_assigned_productsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationListRelationFilter, {
    nullable: true
  })
  product_cross_selling_translation?: Product_cross_selling_translationListRelationFilter | undefined;
}
