import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Klaviyo_flag_storageScalarWhereInput", {})
export class Klaviyo_flag_storageScalarWhereInput {
  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageScalarWhereInput], {
    nullable: true
  })
  AND?: Klaviyo_flag_storageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageScalarWhereInput], {
    nullable: true
  })
  OR?: Klaviyo_flag_storageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageScalarWhereInput], {
    nullable: true
  })
  NOT?: Klaviyo_flag_storageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  key?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  value?: StringFilter | undefined;

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
}
