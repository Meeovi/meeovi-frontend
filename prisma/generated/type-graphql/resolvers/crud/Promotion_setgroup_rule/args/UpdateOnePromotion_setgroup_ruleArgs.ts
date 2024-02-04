import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroup_ruleUpdateInput } from "../../../inputs/Promotion_setgroup_ruleUpdateInput";
import { Promotion_setgroup_ruleWhereUniqueInput } from "../../../inputs/Promotion_setgroup_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePromotion_setgroup_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleUpdateInput, {
    nullable: false
  })
  data!: Promotion_setgroup_ruleUpdateInput;

  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_setgroup_ruleWhereUniqueInput;
}
