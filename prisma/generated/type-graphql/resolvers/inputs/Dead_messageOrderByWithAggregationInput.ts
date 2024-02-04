import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Dead_messageAvgOrderByAggregateInput } from "../inputs/Dead_messageAvgOrderByAggregateInput";
import { Dead_messageCountOrderByAggregateInput } from "../inputs/Dead_messageCountOrderByAggregateInput";
import { Dead_messageMaxOrderByAggregateInput } from "../inputs/Dead_messageMaxOrderByAggregateInput";
import { Dead_messageMinOrderByAggregateInput } from "../inputs/Dead_messageMinOrderByAggregateInput";
import { Dead_messageSumOrderByAggregateInput } from "../inputs/Dead_messageSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Dead_messageOrderByWithAggregationInput", {})
export class Dead_messageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  original_message_class?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  serialized_original_message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  handler_class?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encrypted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  error_count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  next_execution_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exception?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exception_message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exception_file?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exception_line?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  scheduled_task_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Dead_messageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Dead_messageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Dead_messageAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Dead_messageAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Dead_messageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Dead_messageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Dead_messageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Dead_messageMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Dead_messageSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Dead_messageSumOrderByAggregateInput | undefined;
}
