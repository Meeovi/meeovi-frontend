import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discountOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Promotion_discountOrderByWithRelationAndSearchRelevanceInput";
import { RuleOrderByWithRelationAndSearchRelevanceInput } from "../inputs/RuleOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Promotion_discount_ruleOrderByWithRelationAndSearchRelevanceInput", {})
export class Promotion_discount_ruleOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discount_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rule_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Promotion_discountOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  promotion_discount?: Promotion_discountOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => RuleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  rule?: RuleOrderByWithRelationAndSearchRelevanceInput | undefined;
}
