import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Dead_messageScalarWhereInput } from "../inputs/Dead_messageScalarWhereInput";
import { Dead_messageUpdateManyMutationInput } from "../inputs/Dead_messageUpdateManyMutationInput";

@TypeGraphQL.InputType("Dead_messageUpdateManyWithWhereWithoutScheduled_taskInput", {})
export class Dead_messageUpdateManyWithWhereWithoutScheduled_taskInput {
  @TypeGraphQL.Field(_type => Dead_messageScalarWhereInput, {
    nullable: false
  })
  where!: Dead_messageScalarWhereInput;

  @TypeGraphQL.Field(_type => Dead_messageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Dead_messageUpdateManyMutationInput;
}
