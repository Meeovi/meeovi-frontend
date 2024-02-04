import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateWithoutApp_flow_actionInput } from "../inputs/Flow_sequenceCreateWithoutApp_flow_actionInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceCreateOrConnectWithoutApp_flow_actionInput", {})
export class Flow_sequenceCreateOrConnectWithoutApp_flow_actionInput {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_sequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateWithoutApp_flow_actionInput, {
    nullable: false
  })
  create!: Flow_sequenceCreateWithoutApp_flow_actionInput;
}
