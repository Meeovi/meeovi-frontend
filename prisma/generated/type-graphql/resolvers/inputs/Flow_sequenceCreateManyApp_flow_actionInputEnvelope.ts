import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyApp_flow_actionInput } from "../inputs/Flow_sequenceCreateManyApp_flow_actionInput";

@TypeGraphQL.InputType("Flow_sequenceCreateManyApp_flow_actionInputEnvelope", {})
export class Flow_sequenceCreateManyApp_flow_actionInputEnvelope {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateManyApp_flow_actionInput], {
    nullable: false
  })
  data!: Flow_sequenceCreateManyApp_flow_actionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
