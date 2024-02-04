import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsScalarWhereInput } from "../inputs/Directus_dashboardsScalarWhereInput";
import { Directus_dashboardsUpdateManyMutationInput } from "../inputs/Directus_dashboardsUpdateManyMutationInput";

@TypeGraphQL.InputType("Directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput", {})
export class Directus_dashboardsUpdateManyWithWhereWithoutDirectus_usersInput {
  @TypeGraphQL.Field(_type => Directus_dashboardsScalarWhereInput, {
    nullable: false
  })
  where!: Directus_dashboardsScalarWhereInput;

  @TypeGraphQL.Field(_type => Directus_dashboardsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_dashboardsUpdateManyMutationInput;
}
