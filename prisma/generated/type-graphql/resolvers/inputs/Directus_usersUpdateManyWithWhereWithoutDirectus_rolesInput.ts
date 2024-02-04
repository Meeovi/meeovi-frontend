import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersScalarWhereInput } from "../inputs/Directus_usersScalarWhereInput";
import { Directus_usersUpdateManyMutationInput } from "../inputs/Directus_usersUpdateManyMutationInput";

@TypeGraphQL.InputType("Directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput", {})
export class Directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput {
  @TypeGraphQL.Field(_type => Directus_usersScalarWhereInput, {
    nullable: false
  })
  where!: Directus_usersScalarWhereInput;

  @TypeGraphQL.Field(_type => Directus_usersUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_usersUpdateManyMutationInput;
}
