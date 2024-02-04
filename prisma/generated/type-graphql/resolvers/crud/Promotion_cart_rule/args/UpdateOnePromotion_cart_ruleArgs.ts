import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_cart_ruleUpdateInput } from "../../../inputs/Promotion_cart_ruleUpdateInput";
import { Promotion_cart_ruleWhereUniqueInput } from "../../../inputs/Promotion_cart_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePromotion_cart_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleUpdateInput, {
    nullable: false
  })
  data!: Promotion_cart_ruleUpdateInput;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_cart_ruleWhereUniqueInput;
}
