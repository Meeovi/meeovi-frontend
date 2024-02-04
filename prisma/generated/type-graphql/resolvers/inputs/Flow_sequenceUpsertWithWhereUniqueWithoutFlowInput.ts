import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateWithoutFlowInput } from "../inputs/Flow_sequenceCreateWithoutFlowInput";
import { Flow_sequenceUpdateWithoutFlowInput } from "../inputs/Flow_sequenceUpdateWithoutFlowInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceUpsertWithWhereUniqueWithoutFlowInput", {})
export class Flow_sequenceUpsertWithWhereUniqueWithoutFlowInput {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_sequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Flow_sequenceUpdateWithoutFlowInput, {
    nullable: false
  })
  update!: Flow_sequenceUpdateWithoutFlowInput;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateWithoutFlowInput, {
    nullable: false
  })
  create!: Flow_sequenceCreateWithoutFlowInput;
}
