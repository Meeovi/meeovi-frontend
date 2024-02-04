import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFlow_sequenceInput } from "../inputs/FlowCreateOrConnectWithoutFlow_sequenceInput";
import { FlowCreateWithoutFlow_sequenceInput } from "../inputs/FlowCreateWithoutFlow_sequenceInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedOneWithoutFlow_sequenceInput", {})
export class FlowCreateNestedOneWithoutFlow_sequenceInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFlow_sequenceInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFlow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFlow_sequenceInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFlow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;
}
