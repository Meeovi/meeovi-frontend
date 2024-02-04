import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_job_messageCreateManyOd_scheduler_jobInputEnvelope } from "../inputs/Od_scheduler_job_messageCreateManyOd_scheduler_jobInputEnvelope";
import { Od_scheduler_job_messageCreateOrConnectWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_job_messageCreateOrConnectWithoutOd_scheduler_jobInput";
import { Od_scheduler_job_messageCreateWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_job_messageCreateWithoutOd_scheduler_jobInput";
import { Od_scheduler_job_messageWhereUniqueInput } from "../inputs/Od_scheduler_job_messageWhereUniqueInput";

@TypeGraphQL.InputType("Od_scheduler_job_messageCreateNestedManyWithoutOd_scheduler_jobInput", {})
export class Od_scheduler_job_messageCreateNestedManyWithoutOd_scheduler_jobInput {
  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageCreateWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  create?: Od_scheduler_job_messageCreateWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageCreateOrConnectWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  connectOrCreate?: Od_scheduler_job_messageCreateOrConnectWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageCreateManyOd_scheduler_jobInputEnvelope, {
    nullable: true
  })
  createMany?: Od_scheduler_job_messageCreateManyOd_scheduler_jobInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageWhereUniqueInput], {
    nullable: true
  })
  connect?: Od_scheduler_job_messageWhereUniqueInput[] | undefined;
}
