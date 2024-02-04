import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationCountOrderByAggregateInput } from "../inputs/Currency_translationCountOrderByAggregateInput";
import { Currency_translationMaxOrderByAggregateInput } from "../inputs/Currency_translationMaxOrderByAggregateInput";
import { Currency_translationMinOrderByAggregateInput } from "../inputs/Currency_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_translationOrderByWithAggregationInput", {})
export class Currency_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currency_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  short_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Currency_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Currency_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Currency_translationMinOrderByAggregateInput | undefined;
}
