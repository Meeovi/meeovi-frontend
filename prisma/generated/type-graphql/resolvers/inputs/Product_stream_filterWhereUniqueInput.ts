import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Product_streamRelationFilter } from "../inputs/Product_streamRelationFilter";
import { Product_stream_filterListRelationFilter } from "../inputs/Product_stream_filterListRelationFilter";
import { Product_stream_filterNullableRelationFilter } from "../inputs/Product_stream_filterNullableRelationFilter";
import { Product_stream_filterWhereInput } from "../inputs/Product_stream_filterWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Product_stream_filterWhereUniqueInput", {})
export class Product_stream_filterWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterWhereInput], {
    nullable: true
  })
  AND?: Product_stream_filterWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterWhereInput], {
    nullable: true
  })
  OR?: Product_stream_filterWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_filterWhereInput], {
    nullable: true
  })
  NOT?: Product_stream_filterWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_stream_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  parent_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  field?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  operator?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  value?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parameters?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => Product_stream_filterNullableRelationFilter, {
    nullable: true
  })
  product_stream_filter?: Product_stream_filterNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterListRelationFilter, {
    nullable: true
  })
  other_product_stream_filter?: Product_stream_filterListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_streamRelationFilter, {
    nullable: true
  })
  product_stream?: Product_streamRelationFilter | undefined;
}
