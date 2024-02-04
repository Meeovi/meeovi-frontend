import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_cart_ruleWhereInput } from "../../../inputs/Promotion_cart_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPromotion_cart_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_cart_ruleWhereInput | undefined;
}
