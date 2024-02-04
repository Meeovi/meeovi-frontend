import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_refundAvgOrderByAggregateInput } from "../inputs/Adyen_refundAvgOrderByAggregateInput";
import { Adyen_refundCountOrderByAggregateInput } from "../inputs/Adyen_refundCountOrderByAggregateInput";
import { Adyen_refundMaxOrderByAggregateInput } from "../inputs/Adyen_refundMaxOrderByAggregateInput";
import { Adyen_refundMinOrderByAggregateInput } from "../inputs/Adyen_refundMinOrderByAggregateInput";
import { Adyen_refundSumOrderByAggregateInput } from "../inputs/Adyen_refundSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_refundOrderByWithAggregationInput", {})
export class Adyen_refundOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_transaction_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  psp_reference?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  source?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Adyen_refundCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Adyen_refundAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Adyen_refundMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Adyen_refundMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Adyen_refundSumOrderByAggregateInput | undefined;
}
