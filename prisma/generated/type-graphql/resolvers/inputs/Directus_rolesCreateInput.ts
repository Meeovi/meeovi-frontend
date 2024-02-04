import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateNestedManyWithoutDirectus_rolesInput } from "../inputs/Directus_usersCreateNestedManyWithoutDirectus_rolesInput";

@TypeGraphQL.InputType("Directus_rolesCreateInput", {})
export class Directus_rolesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ip_access?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enforce_tfa?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  admin_access?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  app_access?: boolean | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateNestedManyWithoutDirectus_rolesInput, {
    nullable: true
  })
  directus_users?: Directus_usersCreateNestedManyWithoutDirectus_rolesInput | undefined;
}
