import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobCreateManyOd_scheduler_jobInputEnvelope } from "../inputs/Od_scheduler_jobCreateManyOd_scheduler_jobInputEnvelope";
import { Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_jobInput";
import { Od_scheduler_jobCreateWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_jobCreateWithoutOd_scheduler_jobInput";
import { Od_scheduler_jobScalarWhereInput } from "../inputs/Od_scheduler_jobScalarWhereInput";
import { Od_scheduler_jobUpdateManyWithWhereWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_jobUpdateManyWithWhereWithoutOd_scheduler_jobInput";
import { Od_scheduler_jobUpdateWithWhereUniqueWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_jobUpdateWithWhereUniqueWithoutOd_scheduler_jobInput";
import { Od_scheduler_jobUpsertWithWhereUniqueWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_jobUpsertWithWhereUniqueWithoutOd_scheduler_jobInput";
import { Od_scheduler_jobWhereUniqueInput } from "../inputs/Od_scheduler_jobWhereUniqueInput";

@TypeGraphQL.InputType("Od_scheduler_jobUpdateManyWithoutOd_scheduler_jobNestedInput", {})
export class Od_scheduler_jobUpdateManyWithoutOd_scheduler_jobNestedInput {
  @TypeGraphQL.Field(_type => [Od_scheduler_jobCreateWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  create?: Od_scheduler_jobCreateWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  connectOrCreate?: Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobUpsertWithWhereUniqueWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  upsert?: Od_scheduler_jobUpsertWithWhereUniqueWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobCreateManyOd_scheduler_jobInputEnvelope, {
    nullable: true
  })
  createMany?: Od_scheduler_jobCreateManyOd_scheduler_jobInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobWhereUniqueInput], {
    nullable: true
  })
  set?: Od_scheduler_jobWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Od_scheduler_jobWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobWhereUniqueInput], {
    nullable: true
  })
  delete?: Od_scheduler_jobWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobWhereUniqueInput], {
    nullable: true
  })
  connect?: Od_scheduler_jobWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobUpdateWithWhereUniqueWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  update?: Od_scheduler_jobUpdateWithWhereUniqueWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobUpdateManyWithWhereWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  updateMany?: Od_scheduler_jobUpdateManyWithWhereWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Od_scheduler_jobScalarWhereInput[] | undefined;
}
