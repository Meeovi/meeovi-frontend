import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_dashboardsWhereUniqueInput } from "../../../inputs/Directus_dashboardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDirectus_dashboardsArgs {
  @TypeGraphQL.Field(_type => Directus_dashboardsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_dashboardsWhereUniqueInput;
}
