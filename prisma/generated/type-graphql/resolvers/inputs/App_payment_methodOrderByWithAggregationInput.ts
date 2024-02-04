import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCountOrderByAggregateInput } from "../inputs/App_payment_methodCountOrderByAggregateInput";
import { App_payment_methodMaxOrderByAggregateInput } from "../inputs/App_payment_methodMaxOrderByAggregateInput";
import { App_payment_methodMinOrderByAggregateInput } from "../inputs/App_payment_methodMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_payment_methodOrderByWithAggregationInput", {})
export class App_payment_methodOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  pay_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  finalize_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  validate_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  capture_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  refund_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  original_media_id?: SortOrderInput | undefined;

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
  recurring_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_payment_methodCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_payment_methodMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_payment_methodMinOrderByAggregateInput | undefined;
}
