import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_flowsCreateManyDirectus_usersInputEnvelope } from "../inputs/Directus_flowsCreateManyDirectus_usersInputEnvelope";
import { Directus_flowsCreateOrConnectWithoutDirectus_usersInput } from "../inputs/Directus_flowsCreateOrConnectWithoutDirectus_usersInput";
import { Directus_flowsCreateWithoutDirectus_usersInput } from "../inputs/Directus_flowsCreateWithoutDirectus_usersInput";
import { Directus_flowsScalarWhereInput } from "../inputs/Directus_flowsScalarWhereInput";
import { Directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput } from "../inputs/Directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput";
import { Directus_flowsUpdateWithWhereUniqueWithoutDirectus_usersInput } from "../inputs/Directus_flowsUpdateWithWhereUniqueWithoutDirectus_usersInput";
import { Directus_flowsUpsertWithWhereUniqueWithoutDirectus_usersInput } from "../inputs/Directus_flowsUpsertWithWhereUniqueWithoutDirectus_usersInput";
import { Directus_flowsWhereUniqueInput } from "../inputs/Directus_flowsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_flowsUpdateManyWithoutDirectus_usersNestedInput", {})
export class Directus_flowsUpdateManyWithoutDirectus_usersNestedInput {
  @TypeGraphQL.Field(_type => [Directus_flowsCreateWithoutDirectus_usersInput], {
    nullable: true
  })
  create?: Directus_flowsCreateWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsCreateOrConnectWithoutDirectus_usersInput], {
    nullable: true
  })
  connectOrCreate?: Directus_flowsCreateOrConnectWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsUpsertWithWhereUniqueWithoutDirectus_usersInput], {
    nullable: true
  })
  upsert?: Directus_flowsUpsertWithWhereUniqueWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_flowsCreateManyDirectus_usersInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_flowsCreateManyDirectus_usersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsWhereUniqueInput], {
    nullable: true
  })
  set?: Directus_flowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Directus_flowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsWhereUniqueInput], {
    nullable: true
  })
  delete?: Directus_flowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_flowsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsUpdateWithWhereUniqueWithoutDirectus_usersInput], {
    nullable: true
  })
  update?: Directus_flowsUpdateWithWhereUniqueWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput], {
    nullable: true
  })
  updateMany?: Directus_flowsUpdateManyWithWhereWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_flowsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Directus_flowsScalarWhereInput[] | undefined;
}
