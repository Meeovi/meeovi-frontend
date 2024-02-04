import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsCreateWithoutDirectus_usersInput } from "../inputs/Directus_dashboardsCreateWithoutDirectus_usersInput";
import { Directus_dashboardsWhereUniqueInput } from "../inputs/Directus_dashboardsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_dashboardsCreateOrConnectWithoutDirectus_usersInput", {})
export class Directus_dashboardsCreateOrConnectWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_dashboardsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_dashboardsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_dashboardsCreateWithoutDirectus_usersInput, {
    nullable: false
  })
  create!: Directus_dashboardsCreateWithoutDirectus_usersInput;
}
