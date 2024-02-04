import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Od_scheduler_job_messageScalarWhereInput", {})
export class Od_scheduler_job_messageScalarWhereInput {
  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageScalarWhereInput], {
    nullable: true
  })
  AND?: Od_scheduler_job_messageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageScalarWhereInput], {
    nullable: true
  })
  OR?: Od_scheduler_job_messageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageScalarWhereInput], {
    nullable: true
  })
  NOT?: Od_scheduler_job_messageScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  job_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  message?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
