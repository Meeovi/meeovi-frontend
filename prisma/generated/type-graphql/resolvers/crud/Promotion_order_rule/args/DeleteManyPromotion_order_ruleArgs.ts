import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_order_ruleWhereInput } from "../../../inputs/Promotion_order_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPromotion_order_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_order_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_order_ruleWhereInput | undefined;
}
