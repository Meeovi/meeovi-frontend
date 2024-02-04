import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_cart_ruleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Promotion_cart_ruleOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_cart_ruleWhereInput } from "../../../inputs/Promotion_cart_ruleWhereInput";
import { Promotion_cart_ruleWhereUniqueInput } from "../../../inputs/Promotion_cart_ruleWhereUniqueInput";
import { Promotion_cart_ruleScalarFieldEnum } from "../../../../enums/Promotion_cart_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RulePromotion_cart_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_cart_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Promotion_cart_ruleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Promotion_cart_ruleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"promotion_id" | "rule_id"> | undefined;
}
