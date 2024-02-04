import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateOrConnectWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceCreateOrConnectWithoutOther_flow_sequenceInput";
import { Flow_sequenceCreateWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceCreateWithoutOther_flow_sequenceInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceCreateNestedOneWithoutOther_flow_sequenceInput", {})
export class Flow_sequenceCreateNestedOneWithoutOther_flow_sequenceInput {
  @TypeGraphQL.Field(_type => Flow_sequenceCreateWithoutOther_flow_sequenceInput, {
    nullable: true
  })
  create?: Flow_sequenceCreateWithoutOther_flow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateOrConnectWithoutOther_flow_sequenceInput, {
    nullable: true
  })
  connectOrCreate?: Flow_sequenceCreateOrConnectWithoutOther_flow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: true
  })
  connect?: Flow_sequenceWhereUniqueInput | undefined;
}
