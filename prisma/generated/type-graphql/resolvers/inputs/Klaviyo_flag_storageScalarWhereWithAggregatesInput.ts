import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Klaviyo_flag_storageScalarWhereWithAggregatesInput", {})
export class Klaviyo_flag_storageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Klaviyo_flag_storageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Klaviyo_flag_storageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Klaviyo_flag_storageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  key?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  value?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
