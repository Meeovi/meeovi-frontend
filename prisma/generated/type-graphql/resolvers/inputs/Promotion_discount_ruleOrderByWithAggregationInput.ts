import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleCountOrderByAggregateInput } from "../inputs/Promotion_discount_ruleCountOrderByAggregateInput";
import { Promotion_discount_ruleMaxOrderByAggregateInput } from "../inputs/Promotion_discount_ruleMaxOrderByAggregateInput";
import { Promotion_discount_ruleMinOrderByAggregateInput } from "../inputs/Promotion_discount_ruleMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Promotion_discount_ruleOrderByWithAggregationInput", {})
export class Promotion_discount_ruleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discount_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rule_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Promotion_discount_ruleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Promotion_discount_ruleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Promotion_discount_ruleMinOrderByAggregateInput | undefined;
}
