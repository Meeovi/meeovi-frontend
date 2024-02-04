import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Log_entryWhereUniqueInput } from "../../../inputs/Log_entryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLog_entryArgs {
  @TypeGraphQL.Field(_type => Log_entryWhereUniqueInput, {
    nullable: false
  })
  where!: Log_entryWhereUniqueInput;
}
