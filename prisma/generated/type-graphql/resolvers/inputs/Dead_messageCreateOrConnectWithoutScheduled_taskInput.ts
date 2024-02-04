import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Dead_messageCreateWithoutScheduled_taskInput } from "../inputs/Dead_messageCreateWithoutScheduled_taskInput";
import { Dead_messageWhereUniqueInput } from "../inputs/Dead_messageWhereUniqueInput";

@TypeGraphQL.InputType("Dead_messageCreateOrConnectWithoutScheduled_taskInput", {})
export class Dead_messageCreateOrConnectWithoutScheduled_taskInput {
  @TypeGraphQL.Field(_type => Dead_messageWhereUniqueInput, {
    nullable: false
  })
  where!: Dead_messageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Dead_messageCreateWithoutScheduled_taskInput, {
    nullable: false
  })
  create!: Dead_messageCreateWithoutScheduled_taskInput;
}
