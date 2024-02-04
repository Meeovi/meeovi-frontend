import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_cart_ruleOrderByWithAggregationInput } from "../../../inputs/Promotion_cart_ruleOrderByWithAggregationInput";
import { Promotion_cart_ruleScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_cart_ruleScalarWhereWithAggregatesInput";
import { Promotion_cart_ruleWhereInput } from "../../../inputs/Promotion_cart_ruleWhereInput";
import { Promotion_cart_ruleScalarFieldEnum } from "../../../../enums/Promotion_cart_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_cart_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_cart_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_cart_ruleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"promotion_id" | "rule_id">;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_cart_ruleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
