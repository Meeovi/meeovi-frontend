import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceUpdateWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceUpdateWithoutOther_flow_sequenceInput";
import { Flow_sequenceWhereInput } from "../inputs/Flow_sequenceWhereInput";

@TypeGraphQL.InputType("Flow_sequenceUpdateToOneWithWhereWithoutOther_flow_sequenceInput", {})
export class Flow_sequenceUpdateToOneWithWhereWithoutOther_flow_sequenceInput {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  where?: Flow_sequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceUpdateWithoutOther_flow_sequenceInput, {
    nullable: false
  })
  data!: Flow_sequenceUpdateWithoutOther_flow_sequenceInput;
}
