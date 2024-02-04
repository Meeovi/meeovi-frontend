import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_dashboardsWhereInput } from "../../../inputs/Directus_dashboardsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDirectus_dashboardsArgs {
  @TypeGraphQL.Field(_type => Directus_dashboardsWhereInput, {
    nullable: true
  })
  where?: Directus_dashboardsWhereInput | undefined;
}
