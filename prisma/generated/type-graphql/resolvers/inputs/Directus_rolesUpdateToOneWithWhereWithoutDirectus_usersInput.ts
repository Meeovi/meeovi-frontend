import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_rolesUpdateWithoutDirectus_usersInput } from "../inputs/Directus_rolesUpdateWithoutDirectus_usersInput";
import { Directus_rolesWhereInput } from "../inputs/Directus_rolesWhereInput";

@TypeGraphQL.InputType("Directus_rolesUpdateToOneWithWhereWithoutDirectus_usersInput", {})
export class Directus_rolesUpdateToOneWithWhereWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_rolesWhereInput, {
    nullable: true
  })
  where?: Directus_rolesWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesUpdateWithoutDirectus_usersInput, {
    nullable: false
  })
  data!: Directus_rolesUpdateWithoutDirectus_usersInput;
}
