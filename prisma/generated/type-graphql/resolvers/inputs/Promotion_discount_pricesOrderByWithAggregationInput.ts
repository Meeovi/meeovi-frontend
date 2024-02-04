import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_pricesAvgOrderByAggregateInput } from "../inputs/Promotion_discount_pricesAvgOrderByAggregateInput";
import { Promotion_discount_pricesCountOrderByAggregateInput } from "../inputs/Promotion_discount_pricesCountOrderByAggregateInput";
import { Promotion_discount_pricesMaxOrderByAggregateInput } from "../inputs/Promotion_discount_pricesMaxOrderByAggregateInput";
import { Promotion_discount_pricesMinOrderByAggregateInput } from "../inputs/Promotion_discount_pricesMinOrderByAggregateInput";
import { Promotion_discount_pricesSumOrderByAggregateInput } from "../inputs/Promotion_discount_pricesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Promotion_discount_pricesOrderByWithAggregationInput", {})
export class Promotion_discount_pricesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discount_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currency_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Promotion_discount_pricesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Promotion_discount_pricesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Promotion_discount_pricesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Promotion_discount_pricesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Promotion_discount_pricesSumOrderByAggregateInput | undefined;
}
