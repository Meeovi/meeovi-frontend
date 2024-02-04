import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Directus_users } from "../models/Directus_users";
import { Directus_rolesCount } from "../resolvers/outputs/Directus_rolesCount";

@TypeGraphQL.ObjectType("Directus_roles", {})
export class Directus_roles {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  icon!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ip_access?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enforce_tfa!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  admin_access!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  app_access!: boolean;

  directus_users?: Directus_users[];

  @TypeGraphQL.Field(_type => Directus_rolesCount, {
    nullable: true
  })
  _count?: Directus_rolesCount | null;
}
