import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_rolesCreateWithoutDirectus_usersInput } from "../inputs/Directus_rolesCreateWithoutDirectus_usersInput";
import { Directus_rolesWhereUniqueInput } from "../inputs/Directus_rolesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_rolesCreateOrConnectWithoutDirectus_usersInput", {})
export class Directus_rolesCreateOrConnectWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_rolesWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_rolesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_rolesCreateWithoutDirectus_usersInput, {
    nullable: false
  })
  create!: Directus_rolesCreateWithoutDirectus_usersInput;
}
