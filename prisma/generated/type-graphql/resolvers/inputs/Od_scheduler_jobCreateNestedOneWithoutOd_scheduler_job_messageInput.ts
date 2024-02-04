import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_job_messageInput } from "../inputs/Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_job_messageInput";
import { Od_scheduler_jobCreateWithoutOd_scheduler_job_messageInput } from "../inputs/Od_scheduler_jobCreateWithoutOd_scheduler_job_messageInput";
import { Od_scheduler_jobWhereUniqueInput } from "../inputs/Od_scheduler_jobWhereUniqueInput";

@TypeGraphQL.InputType("Od_scheduler_jobCreateNestedOneWithoutOd_scheduler_job_messageInput", {})
export class Od_scheduler_jobCreateNestedOneWithoutOd_scheduler_job_messageInput {
  @TypeGraphQL.Field(_type => Od_scheduler_jobCreateWithoutOd_scheduler_job_messageInput, {
    nullable: true
  })
  create?: Od_scheduler_jobCreateWithoutOd_scheduler_job_messageInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_job_messageInput, {
    nullable: true
  })
  connectOrCreate?: Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_job_messageInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereUniqueInput, {
    nullable: true
  })
  connect?: Od_scheduler_jobWhereUniqueInput | undefined;
}
