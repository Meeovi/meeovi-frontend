import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PromotionOrderByWithRelationAndSearchRelevanceInput";
import { RuleOrderByWithRelationAndSearchRelevanceInput } from "../inputs/RuleOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Promotion_cart_ruleOrderByWithRelationAndSearchRelevanceInput", {})
export class Promotion_cart_ruleOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  promotion_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rule_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PromotionOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  promotion?: PromotionOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => RuleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  rule?: RuleOrderByWithRelationAndSearchRelevanceInput | undefined;
}
