import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Customer_wishlistRelationFilter } from "../inputs/Customer_wishlistRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Customer_wishlist_productWhereInput", {})
export class Customer_wishlist_productWhereInput {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereInput], {
    nullable: true
  })
  AND?: Customer_wishlist_productWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereInput], {
    nullable: true
  })
  OR?: Customer_wishlist_productWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereInput], {
    nullable: true
  })
  NOT?: Customer_wishlist_productWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  customer_wishlist_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistRelationFilter, {
    nullable: true
  })
  customer_wishlist?: Customer_wishlistRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;
}
