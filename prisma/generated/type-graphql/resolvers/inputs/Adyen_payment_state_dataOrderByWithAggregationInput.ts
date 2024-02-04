import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_state_dataCountOrderByAggregateInput } from "../inputs/Adyen_payment_state_dataCountOrderByAggregateInput";
import { Adyen_payment_state_dataMaxOrderByAggregateInput } from "../inputs/Adyen_payment_state_dataMaxOrderByAggregateInput";
import { Adyen_payment_state_dataMinOrderByAggregateInput } from "../inputs/Adyen_payment_state_dataMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Adyen_payment_state_dataOrderByWithAggregationInput", {})
export class Adyen_payment_state_dataOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  token?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  state_data?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_state_dataCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Adyen_payment_state_dataCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_state_dataMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Adyen_payment_state_dataMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_state_dataMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Adyen_payment_state_dataMinOrderByAggregateInput | undefined;
}
