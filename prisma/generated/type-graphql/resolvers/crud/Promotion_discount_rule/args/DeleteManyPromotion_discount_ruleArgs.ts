import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_ruleWhereInput } from "../../../inputs/Promotion_discount_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPromotion_discount_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_discount_ruleWhereInput | undefined;
}
