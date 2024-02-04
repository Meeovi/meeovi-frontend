import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_usersUpdateWithoutDirectus_dashboardsInput } from "../inputs/Directus_usersUpdateWithoutDirectus_dashboardsInput";
import { Directus_usersWhereInput } from "../inputs/Directus_usersWhereInput";

@TypeGraphQL.InputType("Directus_usersUpdateToOneWithWhereWithoutDirectus_dashboardsInput", {})
export class Directus_usersUpdateToOneWithWhereWithoutDirectus_dashboardsInput {
  @TypeGraphQL.Field(_type => Directus_usersWhereInput, {
    nullable: true
  })
  where?: Directus_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersUpdateWithoutDirectus_dashboardsInput, {
    nullable: false
  })
  data!: Directus_usersUpdateWithoutDirectus_dashboardsInput;
}
