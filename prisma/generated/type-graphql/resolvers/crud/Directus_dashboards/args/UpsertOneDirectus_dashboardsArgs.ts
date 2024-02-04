import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_dashboardsCreateInput } from "../../../inputs/Directus_dashboardsCreateInput";
import { Directus_dashboardsUpdateInput } from "../../../inputs/Directus_dashboardsUpdateInput";
import { Directus_dashboardsWhereUniqueInput } from "../../../inputs/Directus_dashboardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDirectus_dashboardsArgs {
  @TypeGraphQL.Field(_type => Directus_dashboardsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_dashboardsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_dashboardsCreateInput, {
    nullable: false
  })
  create!: Directus_dashboardsCreateInput;

  @TypeGraphQL.Field(_type => Directus_dashboardsUpdateInput, {
    nullable: false
  })
  update!: Directus_dashboardsUpdateInput;
}
