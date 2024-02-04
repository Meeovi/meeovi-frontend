import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_ruleUpdateInput } from "../../../inputs/Promotion_discount_ruleUpdateInput";
import { Promotion_discount_ruleWhereUniqueInput } from "../../../inputs/Promotion_discount_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePromotion_discount_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleUpdateInput, {
    nullable: false
  })
  data!: Promotion_discount_ruleUpdateInput;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_ruleWhereUniqueInput;
}
