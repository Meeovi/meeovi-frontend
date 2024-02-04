import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginUpdateInput } from "../../../inputs/PluginUpdateInput";
import { PluginWhereUniqueInput } from "../../../inputs/PluginWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePluginArgs {
  @TypeGraphQL.Field(_type => PluginUpdateInput, {
    nullable: false
  })
  data!: PluginUpdateInput;

  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: false
  })
  where!: PluginWhereUniqueInput;
}
