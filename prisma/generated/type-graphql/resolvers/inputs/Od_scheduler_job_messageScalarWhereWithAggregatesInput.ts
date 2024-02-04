import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Od_scheduler_job_messageScalarWhereWithAggregatesInput", {})
export class Od_scheduler_job_messageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Od_scheduler_job_messageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Od_scheduler_job_messageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Od_scheduler_job_messageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  job_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  type?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  message?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
