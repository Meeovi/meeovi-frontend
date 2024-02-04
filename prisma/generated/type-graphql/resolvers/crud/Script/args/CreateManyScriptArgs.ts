import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScriptCreateManyInput } from "../../../inputs/ScriptCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyScriptArgs {
  @TypeGraphQL.Field(_type => [ScriptCreateManyInput], {
    nullable: false
  })
  data!: ScriptCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
