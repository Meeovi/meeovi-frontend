import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_ruleOrderByWithAggregationInput } from "../../../inputs/Promotion_discount_ruleOrderByWithAggregationInput";
import { Promotion_discount_ruleScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_discount_ruleScalarWhereWithAggregatesInput";
import { Promotion_discount_ruleWhereInput } from "../../../inputs/Promotion_discount_ruleWhereInput";
import { Promotion_discount_ruleScalarFieldEnum } from "../../../../enums/Promotion_discount_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_discount_ruleArgs {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereInput, {
    nullable: true
  })
  where?: Promotion_discount_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_discount_ruleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"discount_id" | "rule_id">;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_discount_ruleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
