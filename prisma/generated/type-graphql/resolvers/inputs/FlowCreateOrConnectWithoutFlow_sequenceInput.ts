import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFlow_sequenceInput } from "../inputs/FlowCreateWithoutFlow_sequenceInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutFlow_sequenceInput", {})
export class FlowCreateOrConnectWithoutFlow_sequenceInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFlow_sequenceInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFlow_sequenceInput;
}
