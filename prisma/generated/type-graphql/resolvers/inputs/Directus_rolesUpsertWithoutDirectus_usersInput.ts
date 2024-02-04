import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_rolesCreateWithoutDirectus_usersInput } from "../inputs/Directus_rolesCreateWithoutDirectus_usersInput";
import { Directus_rolesUpdateWithoutDirectus_usersInput } from "../inputs/Directus_rolesUpdateWithoutDirectus_usersInput";
import { Directus_rolesWhereInput } from "../inputs/Directus_rolesWhereInput";

@TypeGraphQL.InputType("Directus_rolesUpsertWithoutDirectus_usersInput", {})
export class Directus_rolesUpsertWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_rolesUpdateWithoutDirectus_usersInput, {
    nullable: false
  })
  update!: Directus_rolesUpdateWithoutDirectus_usersInput;

  @TypeGraphQL.Field(_type => Directus_rolesCreateWithoutDirectus_usersInput, {
    nullable: false
  })
  create!: Directus_rolesCreateWithoutDirectus_usersInput;

  @TypeGraphQL.Field(_type => Directus_rolesWhereInput, {
    nullable: true
  })
  where?: Directus_rolesWhereInput | undefined;
}
