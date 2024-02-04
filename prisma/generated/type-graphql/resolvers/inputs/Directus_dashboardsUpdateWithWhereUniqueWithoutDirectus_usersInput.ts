import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsUpdateWithoutDirectus_usersInput } from "../inputs/Directus_dashboardsUpdateWithoutDirectus_usersInput";
import { Directus_dashboardsWhereUniqueInput } from "../inputs/Directus_dashboardsWhereUniqueInput";

@TypeGraphQL.InputType("Directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput", {})
export class Directus_dashboardsUpdateWithWhereUniqueWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_dashboardsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_dashboardsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_dashboardsUpdateWithoutDirectus_usersInput, {
    nullable: false
  })
  data!: Directus_dashboardsUpdateWithoutDirectus_usersInput;
}
