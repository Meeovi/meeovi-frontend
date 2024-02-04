import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_cross_sellingRelationFilter } from "../inputs/Product_cross_sellingRelationFilter";
import { Product_cross_selling_assigned_productsWhereInput } from "../inputs/Product_cross_selling_assigned_productsWhereInput";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsWhereUniqueInput", {})
export class Product_cross_selling_assigned_productsWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsWhereInput], {
    nullable: true
  })
  AND?: Product_cross_selling_assigned_productsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsWhereInput], {
    nullable: true
  })
  OR?: Product_cross_selling_assigned_productsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsWhereInput], {
    nullable: true
  })
  NOT?: Product_cross_selling_assigned_productsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  cross_selling_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingRelationFilter, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;
}
