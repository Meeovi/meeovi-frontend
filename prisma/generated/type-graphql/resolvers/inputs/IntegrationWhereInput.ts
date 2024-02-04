import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppListRelationFilter } from "../inputs/AppListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Integration_roleListRelationFilter } from "../inputs/Integration_roleListRelationFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("IntegrationWhereInput", {})
export class IntegrationWhereInput {
  @TypeGraphQL.Field(_type => [IntegrationWhereInput], {
    nullable: true
  })
  AND?: IntegrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationWhereInput], {
    nullable: true
  })
  OR?: IntegrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationWhereInput], {
    nullable: true
  })
  NOT?: IntegrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  write_access?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  access_key?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  secret_access_key?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  label?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  admin?: BoolFilter | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  last_usage_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  deleted_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AppListRelationFilter, {
    nullable: true
  })
  app?: AppListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Integration_roleListRelationFilter, {
    nullable: true
  })
  integration_role?: Integration_roleListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  notification?: NotificationListRelationFilter | undefined;
}
