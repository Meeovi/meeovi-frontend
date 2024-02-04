import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleListRelationFilter } from "../inputs/Acl_user_roleListRelationFilter";
import { AppListRelationFilter } from "../inputs/AppListRelationFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Integration_roleListRelationFilter } from "../inputs/Integration_roleListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Acl_roleWhereInput", {})
export class Acl_roleWhereInput {
  @TypeGraphQL.Field(_type => [Acl_roleWhereInput], {
    nullable: true
  })
  AND?: Acl_roleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_roleWhereInput], {
    nullable: true
  })
  OR?: Acl_roleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_roleWhereInput], {
    nullable: true
  })
  NOT?: Acl_roleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  privileges?: StringFilter | undefined;

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
  deleted_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleListRelationFilter, {
    nullable: true
  })
  acl_user_role?: Acl_user_roleListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AppListRelationFilter, {
    nullable: true
  })
  app?: AppListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Integration_roleListRelationFilter, {
    nullable: true
  })
  integration_role?: Integration_roleListRelationFilter | undefined;
}
