import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersCreateWithoutDirectus_dashboardsInput";
import { Directus_usersWhereUniqueInput } from "../inputs/Directus_usersWhereUniqueInput";

@TypeGraphQL.InputType("Directus_usersCreateOrConnectWithoutDirectus_dashboardsInput", {})
export class Directus_usersCreateOrConnectWithoutDirectus_dashboardsInput {
  @TypeGraphQL.Field(_type => Directus_usersWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_usersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_usersCreateWithoutDirectus_dashboardsInput, {
    nullable: false
  })
  create!: Directus_usersCreateWithoutDirectus_dashboardsInput;
}
