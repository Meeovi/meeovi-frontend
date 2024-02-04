import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScriptWhereInput } from "../../../inputs/ScriptWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyScriptArgs {
  @TypeGraphQL.Field(_type => ScriptWhereInput, {
    nullable: true
  })
  where?: ScriptWhereInput | undefined;
}
