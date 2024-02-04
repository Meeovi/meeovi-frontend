import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScriptWhereUniqueInput } from "../../../inputs/ScriptWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueScriptArgs {
  @TypeGraphQL.Field(_type => ScriptWhereUniqueInput, {
    nullable: false
  })
  where!: ScriptWhereUniqueInput;
}
