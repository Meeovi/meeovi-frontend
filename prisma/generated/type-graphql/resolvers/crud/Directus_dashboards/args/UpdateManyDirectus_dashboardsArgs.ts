import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_dashboardsUpdateManyMutationInput } from "../../../inputs/Directus_dashboardsUpdateManyMutationInput";
import { Directus_dashboardsWhereInput } from "../../../inputs/Directus_dashboardsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDirectus_dashboardsArgs {
  @TypeGraphQL.Field(_type => Directus_dashboardsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_dashboardsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Directus_dashboardsWhereInput, {
    nullable: true
  })
  where?: Directus_dashboardsWhereInput | undefined;
}
