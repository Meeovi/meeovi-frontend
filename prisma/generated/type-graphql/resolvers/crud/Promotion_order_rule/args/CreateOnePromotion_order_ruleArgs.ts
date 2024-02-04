import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_order_ruleCreateInput } from "../../../inputs/Promotion_order_ruleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_order_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_order_ruleCreateInput, {
    nullable: false
  })
  data!: Promotion_order_ruleCreateInput;
}
