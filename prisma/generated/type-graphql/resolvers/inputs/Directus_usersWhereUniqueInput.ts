import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Directus_dashboardsListRelationFilter } from "../inputs/Directus_dashboardsListRelationFilter";
import { Directus_filesListRelationFilter } from "../inputs/Directus_filesListRelationFilter";
import { Directus_flowsListRelationFilter } from "../inputs/Directus_flowsListRelationFilter";
import { Directus_rolesNullableRelationFilter } from "../inputs/Directus_rolesNullableRelationFilter";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Directus_usersWhereUniqueInput", {})
export class Directus_usersWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_identifier?: string | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersWhereInput], {
    nullable: true
  })
  AND?: Directus_usersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersWhereInput], {
    nullable: true
  })
  OR?: Directus_usersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersWhereInput], {
    nullable: true
  })
  NOT?: Directus_usersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  first_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  last_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  location?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tags?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  avatar?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  language?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  theme?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tfa_secret?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  role?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_access?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  last_page?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  provider?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  auth_data?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  email_notifications?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsListRelationFilter, {
    nullable: true
  })
  directus_dashboards?: Directus_dashboardsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_filesListRelationFilter, {
    nullable: true
  })
  directus_files_directus_files_modified_byTodirectus_users?: Directus_filesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_filesListRelationFilter, {
    nullable: true
  })
  directus_files_directus_files_uploaded_byTodirectus_users?: Directus_filesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsListRelationFilter, {
    nullable: true
  })
  directus_flows?: Directus_flowsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesNullableRelationFilter, {
    nullable: true
  })
  directus_roles?: Directus_rolesNullableRelationFilter | undefined;
}
