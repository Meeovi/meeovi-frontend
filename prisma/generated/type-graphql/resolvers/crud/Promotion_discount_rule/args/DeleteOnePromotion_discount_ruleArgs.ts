import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_ruleWhereUniqueInput } from "../../../inputs/Promotion_discount_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePromotion_discount_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_ruleWhereUniqueInput;
}
