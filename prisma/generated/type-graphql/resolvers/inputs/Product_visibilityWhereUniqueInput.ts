import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_visibilityWhereInput } from "../inputs/Product_visibilityWhereInput";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { product_visibilityProduct_idProduct_version_idSales_channel_idCompoundUniqueInput } from "../inputs/product_visibilityProduct_idProduct_version_idSales_channel_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_visibilityWhereUniqueInput", {})
export class Product_visibilityWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => product_visibilityProduct_idProduct_version_idSales_channel_idCompoundUniqueInput, {
    nullable: true
  })
  product_id_product_version_id_sales_channel_id?: product_visibilityProduct_idProduct_version_idSales_channel_idCompoundUniqueInput | undefined;

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
