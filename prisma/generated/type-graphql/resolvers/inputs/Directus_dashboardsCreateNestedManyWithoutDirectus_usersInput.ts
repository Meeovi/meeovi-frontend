import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsCreateManyDirectus_usersInputEnvelope } from "../inputs/Directus_dashboardsCreateManyDirectus_usersInputEnvelope";
import { Directus_dashboardsCreateOrConnectWithoutDirectus_usersInput } from "../inputs/Directus_dashboardsCreateOrConnectWithoutDirectus_usersInput";
import { Directus_dashboardsCreateWithoutDirectus_usersInput } from "../inputs/Directus_dashboardsCreateWithoutDirectus_usersInput";
import { Directus_dashboardsWhereUniqueInput } from "../inputs/Directus_dashboardsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_dashboardsCreateNestedManyWithoutDirectus_usersInput", {})
export class Directus_dashboardsCreateNestedManyWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => [Directus_dashboardsCreateWithoutDirectus_usersInput], {
    nullable: true
  })
  create?: Directus_dashboardsCreateWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsCreateOrConnectWithoutDirectus_usersInput], {
    nullable: true
  })
  connectOrCreate?: Directus_dashboardsCreateOrConnectWithoutDirectus_usersInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsCreateManyDirectus_usersInputEnvelope, {
    nullable: true
  })
  createMany?: Directus_dashboardsCreateManyDirectus_usersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsWhereUniqueInput], {
    nullable: true
  })
  connect?: Directus_dashboardsWhereUniqueInput[] | undefined;
}
