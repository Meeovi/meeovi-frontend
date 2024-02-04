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
import { Shipping_methodRelationFilter } from "../inputs/Shipping_methodRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("App_shipping_methodWhereInput", {})
export class App_shipping_methodWhereInput {
  @TypeGraphQL.Field(_type => [App_shipping_methodWhereInput], {
    nullable: true
  })
  AND?: App_shipping_methodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereInput], {
    nullable: true
  })
  OR?: App_shipping_methodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereInput], {
    nullable: true
  })
  NOT?: App_shipping_methodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  app_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  app_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  shipping_method_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  original_media_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AppNullableRelationFilter, {
    nullable: true
  })
  app?: AppNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediaNullableRelationFilter, {
    nullable: true
  })
  media?: MediaNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodRelationFilter, {
    nullable: true
  })
  shipping_method?: Shipping_methodRelationFilter | undefined;
}
