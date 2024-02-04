import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Customer_wishlist_productScalarWhereInput", {})
export class Customer_wishlist_productScalarWhereInput {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productScalarWhereInput], {
    nullable: true
  })
  AND?: Customer_wishlist_productScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productScalarWhereInput], {
    nullable: true
  })
  OR?: Customer_wishlist_productScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productScalarWhereInput], {
    nullable: true
  })
  NOT?: Customer_wishlist_productScalarWhereInput[] | undefined;

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
}
