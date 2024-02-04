import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Directus_usersCreateManyDirectus_rolesInput", {})
export class Directus_usersCreateManyDirectus_rolesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  language?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  theme?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tfa_secret?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_access?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_page?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provider?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_identifier?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  auth_data?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  email_notifications?: boolean | undefined;
}
