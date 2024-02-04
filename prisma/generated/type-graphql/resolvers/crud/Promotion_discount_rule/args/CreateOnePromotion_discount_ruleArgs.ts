import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_ruleCreateInput } from "../../../inputs/Promotion_discount_ruleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_discount_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleCreateInput, {
    nullable: false
  })
  data!: Promotion_discount_ruleCreateInput;
}
