import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_dashboardsWhereInput } from "../inputs/Directus_dashboardsWhereInput";

@TypeGraphQL.InputType("Directus_dashboardsListRelationFilter", {})
export class Directus_dashboardsListRelationFilter {
  @TypeGraphQL.Field(_type => Directus_dashboardsWhereInput, {
    nullable: true
  })
  every?: Directus_dashboardsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsWhereInput, {
    nullable: true
  })
  some?: Directus_dashboardsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsWhereInput, {
    nullable: true
  })
  none?: Directus_dashboardsWhereInput | undefined;
}
