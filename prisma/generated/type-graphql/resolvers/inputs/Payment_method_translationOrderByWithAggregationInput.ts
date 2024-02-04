import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationCountOrderByAggregateInput } from "../inputs/Payment_method_translationCountOrderByAggregateInput";
import { Payment_method_translationMaxOrderByAggregateInput } from "../inputs/Payment_method_translationMaxOrderByAggregateInput";
import { Payment_method_translationMinOrderByAggregateInput } from "../inputs/Payment_method_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Payment_method_translationOrderByWithAggregationInput", {})
export class Payment_method_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  distinguishable_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Payment_method_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Payment_method_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Payment_method_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Payment_method_translationMinOrderByAggregateInput | undefined;
}
