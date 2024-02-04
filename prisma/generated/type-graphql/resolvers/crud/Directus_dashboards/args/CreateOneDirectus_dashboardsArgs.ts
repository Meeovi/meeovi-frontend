import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_dashboardsCreateInput } from "../../../inputs/Directus_dashboardsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDirectus_dashboardsArgs {
  @TypeGraphQL.Field(_type => Directus_dashboardsCreateInput, {
    nullable: false
  })
  data!: Directus_dashboardsCreateInput;
}
