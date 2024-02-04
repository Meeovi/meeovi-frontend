import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setAvgOrderByAggregateInput } from "../inputs/Custom_field_setAvgOrderByAggregateInput";
import { Custom_field_setCountOrderByAggregateInput } from "../inputs/Custom_field_setCountOrderByAggregateInput";
import { Custom_field_setMaxOrderByAggregateInput } from "../inputs/Custom_field_setMaxOrderByAggregateInput";
import { Custom_field_setMinOrderByAggregateInput } from "../inputs/Custom_field_setMinOrderByAggregateInput";
import { Custom_field_setSumOrderByAggregateInput } from "../inputs/Custom_field_setSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_field_setOrderByWithAggregationInput", {})
export class Custom_field_setOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  global?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Custom_field_setCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Custom_field_setAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Custom_field_setMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Custom_field_setMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Custom_field_setSumOrderByAggregateInput | undefined;
}
