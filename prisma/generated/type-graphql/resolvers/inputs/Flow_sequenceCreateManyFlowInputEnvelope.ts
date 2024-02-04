import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyFlowInput } from "../inputs/Flow_sequenceCreateManyFlowInput";

@TypeGraphQL.InputType("Flow_sequenceCreateManyFlowInputEnvelope", {})
export class Flow_sequenceCreateManyFlowInputEnvelope {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateManyFlowInput], {
    nullable: false
  })
  data!: Flow_sequenceCreateManyFlowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
