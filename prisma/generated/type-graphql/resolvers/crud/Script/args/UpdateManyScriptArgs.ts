import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScriptUpdateManyMutationInput } from "../../../inputs/ScriptUpdateManyMutationInput";
import { ScriptWhereInput } from "../../../inputs/ScriptWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyScriptArgs {
  @TypeGraphQL.Field(_type => ScriptUpdateManyMutationInput, {
    nullable: false
  })
  data!: ScriptUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ScriptWhereInput, {
    nullable: true
  })
  where?: ScriptWhereInput | undefined;
}
