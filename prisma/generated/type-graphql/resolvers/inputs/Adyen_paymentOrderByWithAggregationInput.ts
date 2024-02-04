import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentAvgOrderByAggregateInput } from "../inputs/Adyen_paymentAvgOrderByAggregateInput";
import { Adyen_paymentCountOrderByAggregateInput } from "../inputs/Adyen_paymentCountOrderByAggregateInput";
import { Adyen_paymentMaxOrderByAggregateInput } from "../inputs/Adyen_paymentMaxOrderByAggregateInput";
import { Adyen_paymentMinOrderByAggregateInput } from "../inputs/Adyen_paymentMinOrderByAggregateInput";
import { Adyen_paymentSumOrderByAggregateInput } from "../inputs/Adyen_paymentSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_paymentOrderByWithAggregationInput", {})
export class Adyen_paymentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  pspreference?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  original_reference?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  merchant_reference?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  merchant_order_reference?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_transaction_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount_value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount_currency?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  additional_data?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  capture_mode?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_paymentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Adyen_paymentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_paymentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Adyen_paymentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_paymentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Adyen_paymentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_paymentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Adyen_paymentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_paymentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Adyen_paymentSumOrderByAggregateInput | undefined;
}
