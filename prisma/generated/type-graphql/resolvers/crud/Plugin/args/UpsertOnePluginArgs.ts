import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginCreateInput } from "../../../inputs/PluginCreateInput";
import { PluginUpdateInput } from "../../../inputs/PluginUpdateInput";
import { PluginWhereUniqueInput } from "../../../inputs/PluginWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePluginArgs {
  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: false
  })
  where!: PluginWhereUniqueInput;

  @TypeGraphQL.Field(_type => PluginCreateInput, {
    nullable: false
  })
  create!: PluginCreateInput;

  @TypeGraphQL.Field(_type => PluginUpdateInput, {
    nullable: false
  })
  update!: PluginUpdateInput;
}
