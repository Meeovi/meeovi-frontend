import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_activityWhereUniqueInput } from "../../../inputs/Directus_activityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDirectus_activityOrThrowArgs {
  @TypeGraphQL.Field(_type => Directus_activityWhereUniqueInput, {
    nullable: false
  })
  where!: Directus_activityWhereUniqueInput;
}
