import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_job_messageCountOrderByAggregateInput } from "../inputs/Od_scheduler_job_messageCountOrderByAggregateInput";
import { Od_scheduler_job_messageMaxOrderByAggregateInput } from "../inputs/Od_scheduler_job_messageMaxOrderByAggregateInput";
import { Od_scheduler_job_messageMinOrderByAggregateInput } from "../inputs/Od_scheduler_job_messageMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Od_scheduler_job_messageOrderByWithAggregationInput", {})
export class Od_scheduler_job_messageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  job_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Od_scheduler_job_messageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Od_scheduler_job_messageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Od_scheduler_job_messageMinOrderByAggregateInput | undefined;
}
