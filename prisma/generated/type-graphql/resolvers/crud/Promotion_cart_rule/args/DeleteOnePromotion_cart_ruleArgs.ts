import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_cart_ruleWhereUniqueInput } from "../../../inputs/Promotion_cart_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePromotion_cart_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_cart_ruleWhereUniqueInput;
}
