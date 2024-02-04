import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_ruleCreateInput } from "../../../inputs/Promotion_discount_ruleCreateInput";
import { Promotion_discount_ruleUpdateInput } from "../../../inputs/Promotion_discount_ruleUpdateInput";
import { Promotion_discount_ruleWhereUniqueInput } from "../../../inputs/Promotion_discount_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_discount_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleCreateInput, {
    nullable: false
  })
  create!: Promotion_discount_ruleCreateInput;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleUpdateInput, {
    nullable: false
  })
  update!: Promotion_discount_ruleUpdateInput;
}
