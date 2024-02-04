import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersCreateWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersCreateWithoutDirectus_dashboardsInput";
import { Directus_usersUpdateWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersUpdateWithoutDirectus_dashboardsInput";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";

@TypeGraphQL.InputType("Directus_usersUpsertWithoutDirectus_dashboardsInput", {})
export class Directus_usersUpsertWithoutDirectus_dashboardsInput {
  @TypeGraphQL.Field(_type => Directus_usersUpdateWithoutDirectus_dashboardsInput, {
    nullable: false
  })
  update!: Directus_usersUpdateWithoutDirectus_dashboardsInput;

  @TypeGraphQL.Field(_type => Directus_usersCreateWithoutDirectus_dashboardsInput, {
    nullable: false
  })
  create!: Directus_usersCreateWithoutDirectus_dashboardsInput;

  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  where?: Directus_usersWhereInput | undefined;
}
