import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginCreateInput } from "../../../inputs/PluginCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePluginArgs {
  @TypeGraphQL.Field(_type => PluginCreateInput, {
    nullable: false
  })
  data!: PluginCreateInput;
}
