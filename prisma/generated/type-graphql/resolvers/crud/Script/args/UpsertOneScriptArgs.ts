import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScriptCreateInput } from "../../../inputs/ScriptCreateInput";
import { ScriptUpdateInput } from "../../../inputs/ScriptUpdateInput";
import { ScriptWhereUniqueInput } from "../../../inputs/ScriptWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneScriptArgs {
  @TypeGraphQL.Field(_type => ScriptWhereUniqueInput, {
    nullable: false
  })
  where!: ScriptWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScriptCreateInput, {
    nullable: false
  })
  create!: ScriptCreateInput;

  @TypeGraphQL.Field(_type => ScriptUpdateInput, {
    nullable: false
  })
  update!: ScriptUpdateInput;
}
