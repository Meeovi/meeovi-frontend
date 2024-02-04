import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobOrderByRelationAggregateInput } from "../inputs/Od_scheduler_jobOrderByRelationAggregateInput";
import { Od_scheduler_jobOrderByRelevanceInput } from "../inputs/Od_scheduler_jobOrderByRelevanceInput";
import { Od_scheduler_job_messageOrderByRelationAggregateInput } from "../inputs/Od_scheduler_job_messageOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput", {})
export class Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  message?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  started_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  finished_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  od_scheduler_job?: Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobOrderByRelationAggregateInput, {
    nullable: true
  })
  other_od_scheduler_job?: Od_scheduler_jobOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageOrderByRelationAggregateInput, {
    nullable: true
  })
  od_scheduler_job_message?: Od_scheduler_job_messageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Od_scheduler_jobOrderByRelevanceInput | undefined;
}
