import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCountOrderByAggregateInput } from "../inputs/Custom_entityCountOrderByAggregateInput";
import { Custom_entityMaxOrderByAggregateInput } from "../inputs/Custom_entityMaxOrderByAggregateInput";
import { Custom_entityMinOrderByAggregateInput } from "../inputs/Custom_entityMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_entityOrderByWithAggregationInput", {})
export class Custom_entityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fields?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_id?: SortOrderInput | undefined;

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
  flags?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  plugin_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields_aware?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  label_property?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  deleted_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Custom_entityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Custom_entityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Custom_entityMinOrderByAggregateInput | undefined;
}
