import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginWhereUniqueInput } from "../../../inputs/PluginWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePluginArgs {
  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: false
  })
  where!: PluginWhereUniqueInput;
}
