import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Customer_wishlist_productScalarWhereWithAggregatesInput", {})
export class Customer_wishlist_productScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Customer_wishlist_productScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Customer_wishlist_productScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Customer_wishlist_productScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  customer_wishlist_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  product_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  product_version_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  custom_fields?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
