import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCountOrderByAggregateInput } from "../inputs/Event_actionCountOrderByAggregateInput";
import { Event_actionMaxOrderByAggregateInput } from "../inputs/Event_actionMaxOrderByAggregateInput";
import { Event_actionMinOrderByAggregateInput } from "../inputs/Event_actionMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Event_actionOrderByWithAggregationInput", {})
export class Event_actionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  event_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  action_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  migrated_flow_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Event_actionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Event_actionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Event_actionMinOrderByAggregateInput | undefined;
}
