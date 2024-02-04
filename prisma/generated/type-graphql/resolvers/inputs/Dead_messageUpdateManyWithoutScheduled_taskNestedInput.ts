import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Dead_messageCreateManyScheduled_taskInputEnvelope } from "../inputs/Dead_messageCreateManyScheduled_taskInputEnvelope";
import { Dead_messageCreateOrConnectWithoutScheduled_taskInput } from "../inputs/Dead_messageCreateOrConnectWithoutScheduled_taskInput";
import { Dead_messageCreateWithoutScheduled_taskInput } from "../inputs/Dead_messageCreateWithoutScheduled_taskInput";
import { Dead_messageScalarWhereInput } from "../inputs/Dead_messageScalarWhereInput";
import { Dead_messageUpdateManyWithWhereWithoutScheduled_taskInput } from "../inputs/Dead_messageUpdateManyWithWhereWithoutScheduled_taskInput";
import { Dead_messageUpdateWithWhereUniqueWithoutScheduled_taskInput } from "../inputs/Dead_messageUpdateWithWhereUniqueWithoutScheduled_taskInput";
import { Dead_messageUpsertWithWhereUniqueWithoutScheduled_taskInput } from "../inputs/Dead_messageUpsertWithWhereUniqueWithoutScheduled_taskInput";
import { Dead_messageWhereUniqueInput } from "../inputs/Dead_messageWhereUniqueInput";

@TypeGraphQL.InputType("Dead_messageUpdateManyWithoutScheduled_taskNestedInput", {})
export class Dead_messageUpdateManyWithoutScheduled_taskNestedInput {
  @TypeGraphQL.Field(_type => [Dead_messageCreateWithoutScheduled_taskInput], {
    nullable: true
  })
  create?: Dead_messageCreateWithoutScheduled_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageCreateOrConnectWithoutScheduled_taskInput], {
    nullable: true
  })
  connectOrCreate?: Dead_messageCreateOrConnectWithoutScheduled_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageUpsertWithWhereUniqueWithoutScheduled_taskInput], {
    nullable: true
  })
  upsert?: Dead_messageUpsertWithWhereUniqueWithoutScheduled_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => Dead_messageCreateManyScheduled_taskInputEnvelope, {
    nullable: true
  })
  createMany?: Dead_messageCreateManyScheduled_taskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageWhereUniqueInput], {
    nullable: true
  })
  set?: Dead_messageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Dead_messageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageWhereUniqueInput], {
    nullable: true
  })
  delete?: Dead_messageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageWhereUniqueInput], {
    nullable: true
  })
  connect?: Dead_messageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageUpdateWithWhereUniqueWithoutScheduled_taskInput], {
    nullable: true
  })
  update?: Dead_messageUpdateWithWhereUniqueWithoutScheduled_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageUpdateManyWithWhereWithoutScheduled_taskInput], {
    nullable: true
  })
  updateMany?: Dead_messageUpdateManyWithWhereWithoutScheduled_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Dead_messageScalarWhereInput[] | undefined;
}
