import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PromotionOrderByWithRelationAndSearchRelevanceInput";
import { PromotionWhereInput } from "../../../inputs/PromotionWhereInput";
import { PromotionWhereUniqueInput } from "../../../inputs/PromotionWhereUniqueInput";
import { PromotionScalarFieldEnum } from "../../../../enums/PromotionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPromotionArgs {
  @TypeGraphQL.Field(_type => PromotionWhereInput, {
    nullable: true
  })
  where?: PromotionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PromotionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PromotionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PromotionWhereUniqueInput, {
    nullable: true
  })
  cursor?: PromotionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PromotionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "active" | "valid_from" | "valid_until" | "max_redemptions_global" | "max_redemptions_per_customer" | "priority" | "order_count" | "orders_per_customer_count" | "exclusive" | "code" | "use_codes" | "created_at" | "updated_at" | "customer_restriction" | "prevent_combination" | "exclusion_ids" | "use_individual_codes" | "individual_code_pattern" | "use_setgroups"> | undefined;
}
