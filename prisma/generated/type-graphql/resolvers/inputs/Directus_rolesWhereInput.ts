import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { Directus_usersListRelationFilter } from "../inputs/Directus_usersListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Directus_rolesWhereInput", {})
export class Directus_rolesWhereInput {
  @TypeGraphQL.Field(_type => [Directus_rolesWhereInput], {
    nullable: true
  })
  AND?: Directus_rolesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_rolesWhereInput], {
    nullable: true
  })
  OR?: Directus_rolesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_rolesWhereInput], {
    nullable: true
  })
  NOT?: Directus_rolesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  icon?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ip_access?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  enforce_tfa?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  admin_access?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  app_access?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_usersListRelationFilter, {
    nullable: true
  })
  directus_users?: Directus_usersListRelationFilter | undefined;
}
