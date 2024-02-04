import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput";
import { Od_scheduler_job_messageOrderByRelevanceInput } from "../inputs/Od_scheduler_job_messageOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Od_scheduler_job_messageOrderByWithRelationAndSearchRelevanceInput", {})
export class Od_scheduler_job_messageOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  od_scheduler_job?: Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Od_scheduler_job_messageOrderByRelevanceInput | undefined;
}
