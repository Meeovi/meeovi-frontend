import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Directus_dashboards } from "../models/Directus_dashboards";
import { Directus_files } from "../models/Directus_files";
import { Directus_flows } from "../models/Directus_flows";
import { Directus_roles } from "../models/Directus_roles";
import { Directus_usersCount } from "../resolvers/outputs/Directus_usersCount";

@TypeGraphQL.ObjectType("Directus_users", {})
export class Directus_users {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  language?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  theme?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tfa_secret?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  role?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_access!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_page?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  provider!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_identifier?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  auth_data?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  email_notifications?: boolean | null;

  directus_dashboards?: Directus_dashboards[];

  directus_files_directus_files_modified_byTodirectus_users?: Directus_files[];

  directus_files_directus_files_uploaded_byTodirectus_users?: Directus_files[];

  directus_flows?: Directus_flows[];

  directus_roles?: Directus_roles | null;

  @TypeGraphQL.Field(_type => Directus_usersCount, {
    nullable: true
  })
  _count?: Directus_usersCount | null;
}
