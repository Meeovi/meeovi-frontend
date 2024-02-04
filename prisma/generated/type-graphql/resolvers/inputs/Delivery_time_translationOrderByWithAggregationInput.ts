import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationCountOrderByAggregateInput } from "../inputs/Delivery_time_translationCountOrderByAggregateInput";
import { Delivery_time_translationMaxOrderByAggregateInput } from "../inputs/Delivery_time_translationMaxOrderByAggregateInput";
import { Delivery_time_translationMinOrderByAggregateInput } from "../inputs/Delivery_time_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Delivery_time_translationOrderByWithAggregationInput", {})
export class Delivery_time_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  delivery_time_id?: "asc" | "desc" | undefined;

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
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Delivery_time_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Delivery_time_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Delivery_time_translationMinOrderByAggregateInput | undefined;
}
