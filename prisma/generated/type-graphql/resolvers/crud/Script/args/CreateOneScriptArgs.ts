import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScriptCreateInput } from "../../../inputs/ScriptCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneScriptArgs {
  @TypeGraphQL.Field(_type => ScriptCreateInput, {
    nullable: false
  })
  data!: ScriptCreateInput;
}
