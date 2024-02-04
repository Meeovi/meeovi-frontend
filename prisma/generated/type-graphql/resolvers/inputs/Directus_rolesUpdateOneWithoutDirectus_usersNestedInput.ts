import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_rolesCreateOrConnectWithoutDirectus_usersInput } from "../inputs/Directus_rolesCreateOrConnectWithoutDirectus_usersInput";
import { Directus_rolesCreateWithoutDirectus_usersInput } from "../inputs/Directus_rolesCreateWithoutDirectus_usersInput";
import { Directus_rolesUpdateToOneWithWhereWithoutDirectus_usersInput } from "../inputs/Directus_rolesUpdateToOneWithWhereWithoutDirectus_usersInput";
import { Directus_rolesUpsertWithoutDirectus_usersInput } from "../inputs/Directus_rolesUpsertWithoutDirectus_usersInput";
import { Directus_rolesWhereInput } from "../inputs/Directus_rolesWhereInput";
import { Directus_rolesWhereUniqueInput } from "../inputs/Directus_rolesWhereUniqueInput";

@TypeGraphQL.InputType("Directus_rolesUpdateOneWithoutDirectus_usersNestedInput", {})
export class Directus_rolesUpdateOneWithoutDirectus_usersNestedInput {
  @TypeGraphQL.Field(_type => Directus_rolesCreateWithoutDirectus_usersInput, {
    nullable: true
  })
  create?: Directus_rolesCreateWithoutDirectus_usersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesCreateOrConnectWithoutDirectus_usersInput, {
    nullable: true
  })
  connectOrCreate?: Directus_rolesCreateOrConnectWithoutDirectus_usersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesUpsertWithoutDirectus_usersInput, {
    nullable: true
  })
  upsert?: Directus_rolesUpsertWithoutDirectus_usersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesWhereInput, {
    nullable: true
  })
  disconnect?: Directus_rolesWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesWhereInput, {
    nullable: true
  })
  delete?: Directus_rolesWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesWhereUniqueInput, {
    nullable: true
  })
  connect?: Directus_rolesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Directus_rolesUpdateToOneWithWhereWithoutDirectus_usersInput, {
    nullable: true
  })
  update?: Directus_rolesUpdateToOneWithWhereWithoutDirectus_usersInput | undefined;
}
