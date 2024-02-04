import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScriptUpdateInput } from "../../../inputs/ScriptUpdateInput";
import { ScriptWhereUniqueInput } from "../../../inputs/ScriptWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneScriptArgs {
  @TypeGraphQL.Field(_type => ScriptUpdateInput, {
    nullable: false
  })
  data!: ScriptUpdateInput;

  @TypeGraphQL.Field(_type => ScriptWhereUniqueInput, {
    nullable: false
  })
  where!: ScriptWhereUniqueInput;
}
