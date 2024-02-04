import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyFlow_sequenceInput } from "../inputs/Flow_sequenceCreateManyFlow_sequenceInput";

@TypeGraphQL.InputType("Flow_sequenceCreateManyFlow_sequenceInputEnvelope", {})
export class Flow_sequenceCreateManyFlow_sequenceInputEnvelope {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateManyFlow_sequenceInput], {
    nullable: false
  })
  data!: Flow_sequenceCreateManyFlow_sequenceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
