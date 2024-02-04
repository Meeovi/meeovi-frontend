import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroup_ruleCreateInput } from "../../../inputs/Promotion_setgroup_ruleCreateInput";
import { Promotion_setgroup_ruleUpdateInput } from "../../../inputs/Promotion_setgroup_ruleUpdateInput";
import { Promotion_setgroup_ruleWhereUniqueInput } from "../../../inputs/Promotion_setgroup_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_setgroup_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_setgroup_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleCreateInput, {
    nullable: false
  })
  create!: Promotion_setgroup_ruleCreateInput;

  @TypeGraphQL.Field(_type => Promotion_setgroup_ruleUpdateInput, {
    nullable: false
  })
  update!: Promotion_setgroup_ruleUpdateInput;
}
