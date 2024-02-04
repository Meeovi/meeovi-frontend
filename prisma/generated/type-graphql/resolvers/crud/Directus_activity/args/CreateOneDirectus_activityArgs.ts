import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_activityCreateInput } from "../../../inputs/Directus_activityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDirectus_activityArgs {
  @TypeGraphQL.Field(_type => Directus_activityCreateInput, {
    nullable: false
  })
  data!: Directus_activityCreateInput;
}
