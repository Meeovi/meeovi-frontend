import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Log_entryCreateInput } from "../../../inputs/Log_entryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLog_entryArgs {
  @TypeGraphQL.Field(_type => Log_entryCreateInput, {
    nullable: false
  })
  data!: Log_entryCreateInput;
}
