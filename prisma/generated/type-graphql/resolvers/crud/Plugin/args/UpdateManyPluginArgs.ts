import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginUpdateManyMutationInput } from "../../../inputs/PluginUpdateManyMutationInput";
import { PluginWhereInput } from "../../../inputs/PluginWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPluginArgs {
  @TypeGraphQL.Field(_type => PluginUpdateManyMutationInput, {
    nullable: false
  })
  data!: PluginUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;
}
