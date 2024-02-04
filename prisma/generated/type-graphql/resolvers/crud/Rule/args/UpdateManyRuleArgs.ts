import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RuleUpdateManyMutationInput } from "../../../inputs/RuleUpdateManyMutationInput";
import { RuleWhereInput } from "../../../inputs/RuleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRuleArgs {
  @TypeGraphQL.Field(_type => RuleUpdateManyMutationInput, {
    nullable: false
  })
  data!: RuleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RuleWhereInput, {
    nullable: true
  })
  where?: RuleWhereInput | undefined;
}
