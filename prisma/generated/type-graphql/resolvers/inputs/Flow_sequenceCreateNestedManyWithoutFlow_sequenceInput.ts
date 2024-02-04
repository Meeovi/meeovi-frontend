import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyFlow_sequenceInputEnvelope } from "../inputs/Flow_sequenceCreateManyFlow_sequenceInputEnvelope";
import { Flow_sequenceCreateOrConnectWithoutFlow_sequenceInput } from "../inputs/Flow_sequenceCreateOrConnectWithoutFlow_sequenceInput";
import { Flow_sequenceCreateWithoutFlow_sequenceInput } from "../inputs/Flow_sequenceCreateWithoutFlow_sequenceInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceCreateNestedManyWithoutFlow_sequenceInput", {})
export class Flow_sequenceCreateNestedManyWithoutFlow_sequenceInput {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateWithoutFlow_sequenceInput], {
    nullable: true
  })
  create?: Flow_sequenceCreateWithoutFlow_sequenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceCreateOrConnectWithoutFlow_sequenceInput], {
    nullable: true
  })
  connectOrCreate?: Flow_sequenceCreateOrConnectWithoutFlow_sequenceInput[] | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateManyFlow_sequenceInputEnvelope, {
    nullable: true
  })
  createMany?: Flow_sequenceCreateManyFlow_sequenceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  connect?: Flow_sequenceWhereUniqueInput[] | undefined;
}
