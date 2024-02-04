import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyFlowInputEnvelope } from "../inputs/Flow_sequenceCreateManyFlowInputEnvelope";
import { Flow_sequenceCreateOrConnectWithoutFlowInput } from "../inputs/Flow_sequenceCreateOrConnectWithoutFlowInput";
import { Flow_sequenceCreateWithoutFlowInput } from "../inputs/Flow_sequenceCreateWithoutFlowInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceCreateNestedManyWithoutFlowInput", {})
export class Flow_sequenceCreateNestedManyWithoutFlowInput {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateWithoutFlowInput], {
    nullable: true
  })
  create?: Flow_sequenceCreateWithoutFlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceCreateOrConnectWithoutFlowInput], {
    nullable: true
  })
  connectOrCreate?: Flow_sequenceCreateOrConnectWithoutFlowInput[] | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateManyFlowInputEnvelope, {
    nullable: true
  })
  createMany?: Flow_sequenceCreateManyFlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  connect?: Flow_sequenceWhereUniqueInput[] | undefined;
}
