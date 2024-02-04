import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleCountOrderByAggregateInput } from "../inputs/Promotion_cart_ruleCountOrderByAggregateInput";
import { Promotion_cart_ruleMaxOrderByAggregateInput } from "../inputs/Promotion_cart_ruleMaxOrderByAggregateInput";
import { Promotion_cart_ruleMinOrderByAggregateInput } from "../inputs/Promotion_cart_ruleMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Promotion_cart_ruleOrderByWithAggregationInput", {})
export class Promotion_cart_ruleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  promotion_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rule_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Promotion_cart_ruleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Promotion_cart_ruleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Promotion_cart_ruleMinOrderByAggregateInput | undefined;
}
