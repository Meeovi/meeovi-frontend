import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingCountOrderByAggregateInput } from "../inputs/Currency_country_roundingCountOrderByAggregateInput";
import { Currency_country_roundingMaxOrderByAggregateInput } from "../inputs/Currency_country_roundingMaxOrderByAggregateInput";
import { Currency_country_roundingMinOrderByAggregateInput } from "../inputs/Currency_country_roundingMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_country_roundingOrderByWithAggregationInput", {})
export class Currency_country_roundingOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currency_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_rounding?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  total_rounding?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Currency_country_roundingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Currency_country_roundingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Currency_country_roundingMinOrderByAggregateInput | undefined;
}
