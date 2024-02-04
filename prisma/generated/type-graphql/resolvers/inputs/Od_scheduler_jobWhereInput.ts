import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Od_scheduler_jobListRelationFilter } from "../inputs/Od_scheduler_jobListRelationFilter";
import { Od_scheduler_jobNullableRelationFilter } from "../inputs/Od_scheduler_jobNullableRelationFilter";
import { Od_scheduler_job_messageListRelationFilter } from "../inputs/Od_scheduler_job_messageListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Od_scheduler_jobWhereInput", {})
export class Od_scheduler_jobWhereInput {
  @TypeGraphQL.Field(_type => [Od_scheduler_jobWhereInput], {
    nullable: true
  })
  AND?: Od_scheduler_jobWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobWhereInput], {
    nullable: true
  })
  OR?: Od_scheduler_jobWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobWhereInput], {
    nullable: true
  })
  NOT?: Od_scheduler_jobWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  parent_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  message?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  started_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  finished_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobNullableRelationFilter, {
    nullable: true
  })
  od_scheduler_job?: Od_scheduler_jobNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobListRelationFilter, {
    nullable: true
  })
  other_od_scheduler_job?: Od_scheduler_jobListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageListRelationFilter, {
    nullable: true
  })
  od_scheduler_job_message?: Od_scheduler_job_messageListRelationFilter | undefined;
}
