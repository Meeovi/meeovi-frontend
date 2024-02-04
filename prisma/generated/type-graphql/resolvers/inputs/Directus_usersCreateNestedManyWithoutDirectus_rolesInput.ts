import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateManyDirectus_rolesInputEnvelope } from "../inputs/Directus_usersCreateManyDirectus_rolesInputEnvelope";
import { Directus_usersCreateOrConnectWithoutDirectus_rolesInput } from "../inputs/Directus_usersCreateOrConnectWithoutDirectus_rolesInput";
import { Directus_usersCreateWithoutDirectus_rolesInput } from "../inputs/Directus_usersCreateWithoutDirectus_rolesInput";
import { Directus_usersWhereUniqueInput } from "../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_usersCreateNestedManyWithoutDirectus_rolesInput", {})
export class Directus_usersCreateNestedManyWithoutDirectus_rolesInput {
  @TypeGraphQL.Field(_type => [Directus_usersCreateWithoutDirectus_rolesInput], {
    nullable: true
  })
  create?: Directus_usersCreateWithoutDirectus_rolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersCreateOrConnectWithoutDirectus_rolesInput], {
    nullable: true
  })
  connectOrCreate?: Directus_usersCreateOrConnectWithoutDirectus_rolesInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateManyDirectus_rolesInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_usersCreateManyDirectus_rolesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_usersWhereUniqueInput[] | undefined;
}
