import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Dead_messageUpdateWithoutScheduled_taskInput } from "../inputs/Dead_messageUpdateWithoutScheduled_taskInput";
import { Dead_messageWhereUniqueInput } from "../inputs/Dead_messageWhereUniqueInput";

@TypeGraphQL.InputType("Dead_messageUpdateWithWhereUniqueWithoutScheduled_taskInput", {})
export class Dead_messageUpdateWithWhereUniqueWithoutScheduled_taskInput {
  @TypeGraphQL.Field(_type => Dead_messageWhereUniqueInput, {
    nullable: false
  })
  where!: Dead_messageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Dead_messageUpdateWithoutScheduled_taskInput, {
    nullable: false
  })
  data!: Dead_messageUpdateWithoutScheduled_taskInput;
}
