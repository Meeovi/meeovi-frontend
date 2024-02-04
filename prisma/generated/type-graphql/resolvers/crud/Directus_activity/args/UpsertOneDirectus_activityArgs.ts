import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_activityCreateInput } from "../../../inputs/Directus_activityCreateInput";
import { Directus_activityUpdateInput } from "../../../inputs/Directus_activityUpdateInput";
import { Directus_activityWhereUniqueInput } from "../../../inputs/Directus_activityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDirectus_activityArgs {
  @TypeGraphQL.Field(_type => Directus_activityWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_activityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Directus_activityCreateInput, {
    nullable: false
  })
  create!: Directus_activityCreateInput;

  @TypeGraphQL.Field(_type => Directus_activityUpdateInput, {
    nullable: false
  })
  update!: Directus_activityUpdateInput;
}
