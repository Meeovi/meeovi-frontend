import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_cart_ruleCreateInput } from "../../../inputs/Promotion_cart_ruleCreateInput";
import { Promotion_cart_ruleUpdateInput } from "../../../inputs/Promotion_cart_ruleUpdateInput";
import { Promotion_cart_ruleWhereUniqueInput } from "../../../inputs/Promotion_cart_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_cart_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_cart_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleCreateInput, {
    nullable: false
  })
  create!: Promotion_cart_ruleCreateInput;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleUpdateInput, {
    nullable: false
  })
  update!: Promotion_cart_ruleUpdateInput;
}
