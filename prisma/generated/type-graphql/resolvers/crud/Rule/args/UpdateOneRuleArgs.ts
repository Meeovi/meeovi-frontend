import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RuleUpdateInput } from "../../../inputs/RuleUpdateInput";
import { RuleWhereUniqueInput } from "../../../inputs/RuleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRuleArgs {
  @TypeGraphQL.Field(_type => RuleUpdateInput, {
    nullable: false
  })
  data!: RuleUpdateInput;

  @TypeGraphQL.Field(_type => RuleWhereUniqueInput, {
    nullable: false
  })
  where!: RuleWhereUniqueInput;
}
