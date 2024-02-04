import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_job_messageWhereInput } from "../inputs/Od_scheduler_job_messageWhereInput";

@TypeGraphQL.InputType("Od_scheduler_job_messageListRelationFilter", {})
export class Od_scheduler_job_messageListRelationFilter {
  @TypeGraphQL.Field(_type => Od_scheduler_job_messageWhereInput, {
    nullable: true
  })
  every?: Od_scheduler_job_messageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageWhereInput, {
    nullable: true
  })
  some?: Od_scheduler_job_messageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageWhereInput, {
    nullable: true
  })
  none?: Od_scheduler_job_messageWhereInput | undefined;
}
