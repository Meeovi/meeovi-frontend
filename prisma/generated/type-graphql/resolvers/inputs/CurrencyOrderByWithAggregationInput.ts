import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyAvgOrderByAggregateInput } from "../inputs/CurrencyAvgOrderByAggregateInput";
import { CurrencyCountOrderByAggregateInput } from "../inputs/CurrencyCountOrderByAggregateInput";
import { CurrencyMaxOrderByAggregateInput } from "../inputs/CurrencyMaxOrderByAggregateInput";
import { CurrencyMinOrderByAggregateInput } from "../inputs/CurrencyMinOrderByAggregateInput";
import { CurrencySumOrderByAggregateInput } from "../inputs/CurrencySumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CurrencyOrderByWithAggregationInput", {})
export class CurrencyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  iso_code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  factor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  symbol?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  decimal_precision?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  item_rounding?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  total_rounding?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tax_free_from?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CurrencyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CurrencyAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CurrencyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CurrencyMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrencySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CurrencySumOrderByAggregateInput | undefined;
}
