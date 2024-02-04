import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RuleWhereInput } from "../../../inputs/RuleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRuleArgs {
  @TypeGraphQL.Field(_type => RuleWhereInput, {
    nullable: true
  })
  where?: RuleWhereInput | undefined;
}
