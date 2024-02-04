import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Main_categoryWhereInput } from "../inputs/Main_categoryWhereInput";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { main_categoryProduct_idProduct_version_idSales_channel_idCompoundUniqueInput } from "../inputs/main_categoryProduct_idProduct_version_idSales_channel_idCompoundUniqueInput";

@TypeGraphQL.InputType("Main_categoryWhereUniqueInput", {})
export class Main_categoryWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => main_categoryProduct_idProduct_version_idSales_channel_idCompoundUniqueInput, {
    nullable: true
  })
  product_id_product_version_id_sales_channel_id?: main_categoryProduct_idProduct_version_idSales_channel_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereInput], {
    nullable: true
  })
  AND?: Main_categoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereInput], {
    nullable: true
  })
  OR?: Main_categoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereInput], {
    nullable: true
  })
  NOT?: Main_categoryWhereInput[] | undefined;

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
  category_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  category_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryRelationFilter, {
    nullable: true
  })
  category?: CategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelRelationFilter | undefined;
}
