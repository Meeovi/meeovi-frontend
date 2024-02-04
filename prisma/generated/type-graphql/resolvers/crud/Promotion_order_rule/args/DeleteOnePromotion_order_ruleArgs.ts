import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_order_ruleWhereUniqueInput } from "../../../inputs/Promotion_order_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePromotion_order_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_order_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_order_ruleWhereUniqueInput;
}
