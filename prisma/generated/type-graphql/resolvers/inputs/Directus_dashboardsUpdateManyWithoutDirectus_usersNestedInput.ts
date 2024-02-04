import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsCreateManyDirectus_usersInputEnvelope } from "../inputs/Directus_dashboardsCreateManyDirectus_usersInputEnvelope";
import { Directus_dashboardsCreateOrConnectWithoutDirectus_usersInput } from "../inputs/Directus_dashboardsCreateOrConnectWithoutDirectus_usersInput";
import { Directus_dashboardsCreateWithoutDirectus_usersInput } from "../inputs/Directus_dashboardsCreateWithoutDirectus_usersInput";
import { Directus_dashboardsScalarWhereInput } from "../inputs/Directus_dashboardsScalarWhereInput";
import { Directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput } from "../inputs/Directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput";
import { Directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput } from "../inputs/Directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput";
import { Directus_dashboardsUpsertWithWhereUniqueWithoutDirectus_usersInput } from "../inputs/Directus_dashboardsUpsertWithWhereUniqueWithoutDirectus_usersInput";
import { Directus_dashboardsWhereUniqueInput } from "../inputs/Directus_dashboardsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_dashboardsUpdateManyWithoutDirectus_usersNestedInput", {})
export class Directus_dashboardsUpdateManyWithoutDirectus_usersNestedInput {
  @TypeGraphQL.Field(_type => [Directus_dashboardsCreateWithoutDirectus_usersInput], {
    nullable: true
  })
  create?: Directus_dashboardsCreateWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsCreateOrConnectWithoutDirectus_usersInput], {
    nullable: true
  })
  connectOrCreate?: Directus_dashboardsCreateOrConnectWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsUpsertWithWhereUniqueWithoutDirectus_usersInput], {
    nullable: true
  })
  upsert?: Directus_dashboardsUpsertWithWhereUniqueWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsCreateManyDirectus_usersInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_dashboardsCreateManyDirectus_usersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsWhereUniqueInput], {
    nullable: true
  })
  set?: Directus_dashboardsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Directus_dashboardsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsWhereUniqueInput], {
    nullable: true
  })
  delete?: Directus_dashboardsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_dashboardsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput], {
    nullable: true
  })
  update?: Directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput], {
    nullable: true
  })
  updateMany?: Directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Directus_dashboardsScalarWhereInput[] | undefined;
}
