import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_order_ruleCreateInput } from "../../../inputs/Promotion_order_ruleCreateInput";
import { Promotion_order_ruleUpdateInput } from "../../../inputs/Promotion_order_ruleUpdateInput";
import { Promotion_order_ruleWhereUniqueInput } from "../../../inputs/Promotion_order_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_order_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_order_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_order_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_order_ruleCreateInput, {
    nullable: false
  })
  create!: Promotion_order_ruleCreateInput;

  @TypeGraphQL.Field(_type => Promotion_order_ruleUpdateInput, {
    nullable: false
  })
  update!: Promotion_order_ruleUpdateInput;
}
