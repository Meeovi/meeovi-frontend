import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_rolesCreateOrConnectWithoutDirectus_usersInput } from "../inputs/Directus_rolesCreateOrConnectWithoutDirectus_usersInput";
import { Directus_rolesCreateWithoutDirectus_usersInput } from "../inputs/Directus_rolesCreateWithoutDirectus_usersInput";
import { Directus_rolesWhereUniqueInput } from "../inputs/Directus_rolesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_rolesCreateNestedOneWithoutDirectus_usersInput", {})
export class Directus_rolesCreateNestedOneWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_rolesCreateWithoutDirectus_usersInput, {
    nullable: true
  })
  create?: Directus_rolesCreateWithoutDirectus_usersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesCreateOrConnectWithoutDirectus_usersInput, {
    nullable: true
  })
  connectOrCreate?: Directus_rolesCreateOrConnectWithoutDirectus_usersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesWhereUniqueInput, {
    nullable: true
  })
  connect?: Directus_rolesWhereUniqueInput | undefined;
}
