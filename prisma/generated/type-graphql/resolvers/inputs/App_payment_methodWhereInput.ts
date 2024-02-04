import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppNullableRelationFilter } from "../inputs/AppNullableRelationFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { MediaNullableRelationFilter } from "../inputs/MediaNullableRelationFilter";
import { Payment_methodRelationFilter } from "../inputs/Payment_methodRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("App_payment_methodWhereInput", {})
export class App_payment_methodWhereInput {
  @TypeGraphQL.Field(_type => [App_payment_methodWhereInput], {
    nullable: true
  })
  AND?: App_payment_methodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodWhereInput], {
    nullable: true
  })
  OR?: App_payment_methodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodWhereInput], {
    nullable: true
  })
  NOT?: App_payment_methodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  app_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  payment_method_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  app_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  pay_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  finalize_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  validate_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  capture_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  refund_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  original_media_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  recurring_url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AppNullableRelationFilter, {
    nullable: true
  })
  app?: AppNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediaNullableRelationFilter, {
    nullable: true
  })
  media?: MediaNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Payment_methodRelationFilter, {
    nullable: true
  })
  payment_method?: Payment_methodRelationFilter | undefined;
}
