import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateWithoutFlowInput } from "../inputs/Flow_sequenceCreateWithoutFlowInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceCreateOrConnectWithoutFlowInput", {})
export class Flow_sequenceCreateOrConnectWithoutFlowInput {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_sequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateWithoutFlowInput, {
    nullable: false
  })
  create!: Flow_sequenceCreateWithoutFlowInput;
}
