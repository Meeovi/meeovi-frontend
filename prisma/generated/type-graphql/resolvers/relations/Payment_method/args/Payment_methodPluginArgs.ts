import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginWhereInput } from "../../../inputs/PluginWhereInput";

@TypeGraphQL.ArgsType()
export class Payment_methodPluginArgs {
  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;
}
