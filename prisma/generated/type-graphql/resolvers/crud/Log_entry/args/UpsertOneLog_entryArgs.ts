import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Log_entryCreateInput } from "../../../inputs/Log_entryCreateInput";
import { Log_entryUpdateInput } from "../../../inputs/Log_entryUpdateInput";
import { Log_entryWhereUniqueInput } from "../../../inputs/Log_entryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLog_entryArgs {
  @TypeGraphQL.Field(_type => Log_entryWhereUniqueInput, {
    nullable: false
  })
  where!: Log_entryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Log_entryCreateInput, {
    nullable: false
  })
  create!: Log_entryCreateInput;

  @TypeGraphQL.Field(_type => Log_entryUpdateInput, {
    nullable: false
  })
  update!: Log_entryUpdateInput;
}
