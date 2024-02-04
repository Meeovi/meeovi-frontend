import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_dashboardsUpdateInput } from "../../../inputs/Directus_dashboardsUpdateInput";
import { Directus_dashboardsWhereUniqueInput } from "../../../inputs/Directus_dashboardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDirectus_dashboardsArgs {
  @TypeGraphQL.Field(_type => Directus_dashboardsUpdateInput, {
    nullable: false
  })
  data!: Directus_dashboardsUpdateInput;

  @TypeGraphQL.Field(_type => Directus_dashboardsWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_dashboardsWhereUniqueInput;
}
