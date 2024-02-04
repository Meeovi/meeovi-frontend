import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RuleCreateInput } from "../../../inputs/RuleCreateInput";
import { RuleUpdateInput } from "../../../inputs/RuleUpdateInput";
import { RuleWhereUniqueInput } from "../../../inputs/RuleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRuleArgs {
  @TypeGraphQL.Field(_type => RuleWhereUniqueInput, {
    nullable: false
  })
  where!: RuleWhereUniqueInput;

  @TypeGraphQL.Field(_type => RuleCreateInput, {
    nullable: false
  })
  create!: RuleCreateInput;

  @TypeGraphQL.Field(_type => RuleUpdateInput, {
    nullable: false
  })
  update!: RuleUpdateInput;
}
