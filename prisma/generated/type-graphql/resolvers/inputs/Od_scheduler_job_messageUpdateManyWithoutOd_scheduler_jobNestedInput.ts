import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_job_messageCreateManyOd_scheduler_jobInputEnvelope } from "../inputs/Od_scheduler_job_messageCreateManyOd_scheduler_jobInputEnvelope";
import { Od_scheduler_job_messageCreateOrConnectWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_job_messageCreateOrConnectWithoutOd_scheduler_jobInput";
import { Od_scheduler_job_messageCreateWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_job_messageCreateWithoutOd_scheduler_jobInput";
import { Od_scheduler_job_messageScalarWhereInput } from "../inputs/Od_scheduler_job_messageScalarWhereInput";
import { Od_scheduler_job_messageUpdateManyWithWhereWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_job_messageUpdateManyWithWhereWithoutOd_scheduler_jobInput";
import { Od_scheduler_job_messageUpdateWithWhereUniqueWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_job_messageUpdateWithWhereUniqueWithoutOd_scheduler_jobInput";
import { Od_scheduler_job_messageUpsertWithWhereUniqueWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_job_messageUpsertWithWhereUniqueWithoutOd_scheduler_jobInput";
import { Od_scheduler_job_messageWhereUniqueInput } from "../inputs/Od_scheduler_job_messageWhereUniqueInput";

@TypeGraphQL.InputType("Od_scheduler_job_messageUpdateManyWithoutOd_scheduler_jobNestedInput", {})
export class Od_scheduler_job_messageUpdateManyWithoutOd_scheduler_jobNestedInput {
  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageCreateWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  create?: Od_scheduler_job_messageCreateWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageCreateOrConnectWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  connectOrCreate?: Od_scheduler_job_messageCreateOrConnectWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageUpsertWithWhereUniqueWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  upsert?: Od_scheduler_job_messageUpsertWithWhereUniqueWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageCreateManyOd_scheduler_jobInputEnvelope, {
    nullable: true
  })
  createMany?: Od_scheduler_job_messageCreateManyOd_scheduler_jobInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageWhereUniqueInput], {
    nullable: true
  })
  set?: Od_scheduler_job_messageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Od_scheduler_job_messageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageWhereUniqueInput], {
    nullable: true
  })
  delete?: Od_scheduler_job_messageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageWhereUniqueInput], {
    nullable: true
  })
  connect?: Od_scheduler_job_messageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageUpdateWithWhereUniqueWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  update?: Od_scheduler_job_messageUpdateWithWhereUniqueWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageUpdateManyWithWhereWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  updateMany?: Od_scheduler_job_messageUpdateManyWithWhereWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Od_scheduler_job_messageScalarWhereInput[] | undefined;
}
