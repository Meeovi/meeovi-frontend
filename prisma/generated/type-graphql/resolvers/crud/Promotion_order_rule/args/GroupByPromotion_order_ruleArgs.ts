import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_order_ruleOrderByWithAggregationInput } from "../../../inputs/Promotion_order_ruleOrderByWithAggregationInput";
import { Promotion_order_ruleScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_order_ruleScalarWhereWithAggregatesInput";
import { Promotion_order_ruleWhereInput } from "../../../inputs/Promotion_order_ruleWhereInput";
import { Promotion_order_ruleScalarFieldEnum } from "../../../../enums/Promotion_order_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_order_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_order_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_order_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_order_ruleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_order_ruleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_order_ruleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"promotion_id" | "rule_id">;

  @TypeGraphQL.Field(_type => Promotion_order_ruleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_order_ruleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
