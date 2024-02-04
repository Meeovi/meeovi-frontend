import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_cart_ruleCreateInput } from "../../../inputs/Promotion_cart_ruleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_cart_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleCreateInput, {
    nullable: false
  })
  data!: Promotion_cart_ruleCreateInput;
}
