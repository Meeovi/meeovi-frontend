import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PluginCreateManyInput } from "../../../inputs/PluginCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPluginArgs {
  @TypeGraphQL.Field(_type => [PluginCreateManyInput], {
    nullable: false
  })
  data!: PluginCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
