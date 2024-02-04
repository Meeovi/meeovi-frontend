import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceCreateWithoutOther_flow_sequenceInput";
import { Flow_sequenceUpdateWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceUpdateWithoutOther_flow_sequenceInput";
import { Flow_sequenceWhereInput } from "../inputs/Flow_sequenceWhereInput";

@TypeGraphQL.InputType("Flow_sequenceUpsertWithoutOther_flow_sequenceInput", {})
export class Flow_sequenceUpsertWithoutOther_flow_sequenceInput {
  @TypeGraphQL.Field(_type => Flow_sequenceUpdateWithoutOther_flow_sequenceInput, {
    nullable: false
  })
  update!: Flow_sequenceUpdateWithoutOther_flow_sequenceInput;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateWithoutOther_flow_sequenceInput, {
    nullable: false
  })
  create!: Flow_sequenceCreateWithoutOther_flow_sequenceInput;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  where?: Flow_sequenceWhereInput | undefined;
}
