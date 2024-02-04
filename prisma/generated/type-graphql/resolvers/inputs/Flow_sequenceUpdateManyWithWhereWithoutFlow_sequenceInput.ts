import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceScalarWhereInput } from "../inputs/Flow_sequenceScalarWhereInput";
import { Flow_sequenceUpdateManyMutationInput } from "../inputs/Flow_sequenceUpdateManyMutationInput";

@TypeGraphQL.InputType("Flow_sequenceUpdateManyWithWhereWithoutFlow_sequenceInput", {})
export class Flow_sequenceUpdateManyWithWhereWithoutFlow_sequenceInput {
  @TypeGraphQL.Field(_type => Flow_sequenceScalarWhereInput, {
    nullable: false
  })
  where!: Flow_sequenceScalarWhereInput;

  @TypeGraphQL.Field(_type => Flow_sequenceUpdateManyMutationInput, {
    nullable: false
  })
  data!: Flow_sequenceUpdateManyMutationInput;
}
