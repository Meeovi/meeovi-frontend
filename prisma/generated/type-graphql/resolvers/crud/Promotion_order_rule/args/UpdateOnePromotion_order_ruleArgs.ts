import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_order_ruleUpdateInput } from "../../../inputs/Promotion_order_ruleUpdateInput";
import { Promotion_order_ruleWhereUniqueInput } from "../../../inputs/Promotion_order_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePromotion_order_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_order_ruleUpdateInput, {
    nullable: false
  })
  data!: Promotion_order_ruleUpdateInput;

  @TypeGraphQL.Field(_type => Promotion_order_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_order_ruleWhereUniqueInput;
}
