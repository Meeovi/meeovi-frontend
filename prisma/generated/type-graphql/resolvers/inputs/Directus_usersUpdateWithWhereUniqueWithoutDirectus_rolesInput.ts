import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersUpdateWithoutDirectus_rolesInput } from "../inputs/Directus_usersUpdateWithoutDirectus_rolesInput";
import { Directus_usersWhereUniqueInput } from "../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput", {})
export class Directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput {
  @TypeGraphQL.Field(_type => Directus_usersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_usersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_usersUpdateWithoutDirectus_rolesInput, {
    nullable: false
  })
  data!: Directus_usersUpdateWithoutDirectus_rolesInput;
}
