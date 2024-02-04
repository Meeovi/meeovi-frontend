import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateManyDirectus_rolesInputEnvelope } from "../inputs/Directus_usersCreateManyDirectus_rolesInputEnvelope";
import { Directus_usersCreateOrConnectWithoutDirectus_rolesInput } from "../inputs/Directus_usersCreateOrConnectWithoutDirectus_rolesInput";
import { Directus_usersCreateWithoutDirectus_rolesInput } from "../inputs/Directus_usersCreateWithoutDirectus_rolesInput";
import { Directus_usersScalarWhereInput } from "../inputs/Directus_usersScalarWhereInput";
import { Directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput } from "../inputs/Directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput";
import { Directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput } from "../inputs/Directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput";
import { Directus_usersUpsertWithWhereUniqueWithoutDirectus_rolesInput } from "../inputs/Directus_usersUpsertWithWhereUniqueWithoutDirectus_rolesInput";
import { Directus_usersWhereUniqueInput } from "../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_usersUpdateManyWithoutDirectus_rolesNestedInput", {})
export class Directus_usersUpdateManyWithoutDirectus_rolesNestedInput {
  @TypeGraphQL.Field(_type => [Directus_usersCreateWithoutDirectus_rolesInput], {
    nullable: true
  })
  create?: Directus_usersCreateWithoutDirectus_rolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersCreateOrConnectWithoutDirectus_rolesInput], {
    nullable: true
  })
  connectOrCreate?: Directus_usersCreateOrConnectWithoutDirectus_rolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersUpsertWithWhereUniqueWithoutDirectus_rolesInput], {
    nullable: true
  })
  upsert?: Directus_usersUpsertWithWhereUniqueWithoutDirectus_rolesInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateManyDirectus_rolesInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_usersCreateManyDirectus_rolesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersWhereUniqueInput], {
    nullable: true
  })
  set?: Directus_usersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Directus_usersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersWhereUniqueInput], {
    nullable: true
  })
  delete?: Directus_usersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_usersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput], {
    nullable: true
  })
  update?: Directus_usersUpdateWithWhereUniqueWithoutDirectus_rolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput], {
    nullable: true
  })
  updateMany?: Directus_usersUpdateManyWithWhereWithoutDirectus_rolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_usersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Directus_usersScalarWhereInput[] | undefined;
}
