import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Log_entryUpdateManyMutationInput } from "../../../inputs/Log_entryUpdateManyMutationInput";
import { Log_entryWhereInput } from "../../../inputs/Log_entryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLog_entryArgs {
  @TypeGraphQL.Field(_type => Log_entryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Log_entryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Log_entryWhereInput, {
    nullable: true
  })
  where?: Log_entryWhereInput | undefined;
}
