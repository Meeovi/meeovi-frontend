import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RuleWhereUniqueInput } from "../../../inputs/RuleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRuleArgs {
  @TypeGraphQL.Field(_type => RuleWhereUniqueInput, {
    nullable: false
  })
  where!: RuleWhereUniqueInput;
}
