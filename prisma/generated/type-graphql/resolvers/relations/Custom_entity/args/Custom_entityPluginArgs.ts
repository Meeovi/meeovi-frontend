import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginWhereInput } from "../../../inputs/PluginWhereInput";

@TypeGraphQL.ArgsType()
export class Custom_entityPluginArgs {
  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;
}
