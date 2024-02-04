import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceCreateWithoutOther_flow_sequenceInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceCreateOrConnectWithoutOther_flow_sequenceInput", {})
export class Flow_sequenceCreateOrConnectWithoutOther_flow_sequenceInput {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_sequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateWithoutOther_flow_sequenceInput, {
    nullable: false
  })
  create!: Flow_sequenceCreateWithoutOther_flow_sequenceInput;
}
