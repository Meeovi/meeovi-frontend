import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_activityWhereInput } from "../../../inputs/Directus_activityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDirectus_activityArgs {
  @TypeGraphQL.Field(_type => Directus_activityWhereInput, {
    nullable: true
  })
  where?: Directus_activityWhereInput | undefined;
}
