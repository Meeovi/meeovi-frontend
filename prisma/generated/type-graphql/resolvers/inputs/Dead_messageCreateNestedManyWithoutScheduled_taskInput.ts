import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Dead_messageCreateManyScheduled_taskInputEnvelope } from "../inputs/Dead_messageCreateManyScheduled_taskInputEnvelope";
import { Dead_messageCreateOrConnectWithoutScheduled_taskInput } from "../inputs/Dead_messageCreateOrConnectWithoutScheduled_taskInput";
import { Dead_messageCreateWithoutScheduled_taskInput } from "../inputs/Dead_messageCreateWithoutScheduled_taskInput";
import { Dead_messageWhereUniqueInput } from "../inputs/Dead_messageWhereUniqueInput";

@TypeGraphQL.InputType("Dead_messageCreateNestedManyWithoutScheduled_taskInput", {})
export class Dead_messageCreateNestedManyWithoutScheduled_taskInput {
  @TypeGraphQL.Field(_type => [Dead_messageCreateWithoutScheduled_taskInput], {
    nullable: true
  })
  create?: Dead_messageCreateWithoutScheduled_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageCreateOrConnectWithoutScheduled_taskInput], {
    nullable: true
  })
  connectOrCreate?: Dead_messageCreateOrConnectWithoutScheduled_taskInput[] | undefined;

  @TypeGraphQL.Field(_type => Dead_messageCreateManyScheduled_taskInputEnvelope, {
    nullable: true
  })
  createMany?: Dead_messageCreateManyScheduled_taskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Dead_messageWhereUniqueInput], {
    nullable: true
  })
  connect?: Dead_messageWhereUniqueInput[] | undefined;
}
