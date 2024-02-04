import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionOrderByWithAggregationInput } from "../../../inputs/PromotionOrderByWithAggregationInput";
import { PromotionScalarWhereWithAggregatesInput } from "../../../inputs/PromotionScalarWhereWithAggregatesInput";
import { PromotionWhereInput } from "../../../inputs/PromotionWhereInput";
import { PromotionScalarFieldEnum } from "../../../../enums/PromotionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotionArgs {
  @TypeGraphQL.Field(_type => PromotionWhereInput, {
    nullable: true
  })
  where?: PromotionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PromotionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PromotionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PromotionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "active" | "valid_from" | "valid_until" | "max_redemptions_global" | "max_redemptions_per_customer" | "priority" | "order_count" | "orders_per_customer_count" | "exclusive" | "code" | "use_codes" | "created_at" | "updated_at" | "customer_restriction" | "prevent_combination" | "exclusion_ids" | "use_individual_codes" | "individual_code_pattern" | "use_setgroups">;

  @TypeGraphQL.Field(_type => PromotionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PromotionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
