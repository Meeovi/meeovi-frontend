import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_captureAvgOrderByAggregateInput } from "../inputs/Adyen_payment_captureAvgOrderByAggregateInput";
import { Adyen_payment_captureCountOrderByAggregateInput } from "../inputs/Adyen_payment_captureCountOrderByAggregateInput";
import { Adyen_payment_captureMaxOrderByAggregateInput } from "../inputs/Adyen_payment_captureMaxOrderByAggregateInput";
import { Adyen_payment_captureMinOrderByAggregateInput } from "../inputs/Adyen_payment_captureMinOrderByAggregateInput";
import { Adyen_payment_captureSumOrderByAggregateInput } from "../inputs/Adyen_payment_captureSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_payment_captureOrderByWithAggregationInput", {})
export class Adyen_payment_captureOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => Adyen_payment_captureCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Adyen_payment_captureCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Adyen_payment_captureAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Adyen_payment_captureMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Adyen_payment_captureMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Adyen_payment_captureSumOrderByAggregateInput | undefined;
}
