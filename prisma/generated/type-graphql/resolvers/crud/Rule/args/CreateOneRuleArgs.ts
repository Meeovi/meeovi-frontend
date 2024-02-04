import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RuleCreateInput } from "../../../inputs/RuleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRuleArgs {
  @TypeGraphQL.Field(_type => RuleCreateInput, {
    nullable: false
  })
  data!: RuleCreateInput;
}
