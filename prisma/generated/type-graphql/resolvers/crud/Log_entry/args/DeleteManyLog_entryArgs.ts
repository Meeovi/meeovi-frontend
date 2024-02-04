import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Log_entryWhereInput } from "../../../inputs/Log_entryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLog_entryArgs {
  @TypeGraphQL.Field(_type => Log_entryWhereInput, {
    nullable: true
  })
  where?: Log_entryWhereInput | undefined;
}
