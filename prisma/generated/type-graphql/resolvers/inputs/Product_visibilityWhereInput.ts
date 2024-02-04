import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";

@TypeGraphQL.InputType("Product_visibilityWhereInput", {})
export class Product_visibilityWhereInput {
  @TypeGraphQL.Field(_type => [Product_visibilityWhereInput], {
    nullable: true
  })
  AND?: Product_visibilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereInput], {
    nullable: true
  })
  OR?: Product_visibilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereInput], {
    nullable: true
  })
  NOT?: Product_visibilityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  visibility?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelRelationFilter | undefined;
}
