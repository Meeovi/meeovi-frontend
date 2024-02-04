import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_responseCountOrderByAggregateInput } from "../inputs/Adyen_payment_responseCountOrderByAggregateInput";
import { Adyen_payment_responseMaxOrderByAggregateInput } from "../inputs/Adyen_payment_responseMaxOrderByAggregateInput";
import { Adyen_payment_responseMinOrderByAggregateInput } from "../inputs/Adyen_payment_responseMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_payment_responseOrderByWithAggregationInput", {})
export class Adyen_payment_responseOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order_transaction_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  result_code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  response?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_responseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Adyen_payment_responseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_responseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Adyen_payment_responseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_responseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Adyen_payment_responseMinOrderByAggregateInput | undefined;
}
