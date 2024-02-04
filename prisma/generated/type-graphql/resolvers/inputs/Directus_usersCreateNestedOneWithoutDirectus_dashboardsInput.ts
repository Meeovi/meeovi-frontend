import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateOrConnectWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersCreateOrConnectWithoutDirectus_dashboardsInput";
import { Directus_usersCreateWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersCreateWithoutDirectus_dashboardsInput";
import { Directus_usersWhereUniqueInput } from "../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_usersCreateNestedOneWithoutDirectus_dashboardsInput", {})
export class Directus_usersCreateNestedOneWithoutDirectus_dashboardsInput {
  @TypeGraphQL.Field(_type => Directus_usersCreateWithoutDirectus_dashboardsInput, {
    nullable: true
  })
  create?: Directus_usersCreateWithoutDirectus_dashboardsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateOrConnectWithoutDirectus_dashboardsInput, {
    nullable: true
  })
  connectOrCreate?: Directus_usersCreateOrConnectWithoutDirectus_dashboardsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersWhereUniqueInput, {
    nullable: true
  })
  connect?: Directus_usersWhereUniqueInput | undefined;
}
