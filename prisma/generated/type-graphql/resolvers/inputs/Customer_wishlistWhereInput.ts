import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { Customer_wishlist_productListRelationFilter } from "../inputs/Customer_wishlist_productListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Customer_wishlistWhereInput", {})
export class Customer_wishlistWhereInput {
  @TypeGraphQL.Field(_type => [Customer_wishlistWhereInput], {
    nullable: true
  })
  AND?: Customer_wishlistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereInput], {
    nullable: true
  })
  OR?: Customer_wishlistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereInput], {
    nullable: true
  })
  NOT?: Customer_wishlistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  customer_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

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

  @TypeGraphQL.Field(_type => CustomerRelationFilter, {
    nullable: true
  })
  customer?: CustomerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productListRelationFilter, {
    nullable: true
  })
  customer_wishlist_product?: Customer_wishlist_productListRelationFilter | undefined;
}
