import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionCreateNestedOneWithoutFlow_sequenceInput } from "../inputs/App_flow_actionCreateNestedOneWithoutFlow_sequenceInput";
import { FlowCreateNestedOneWithoutFlow_sequenceInput } from "../inputs/FlowCreateNestedOneWithoutFlow_sequenceInput";
import { Flow_sequenceCreateNestedManyWithoutFlow_sequenceInput } from "../inputs/Flow_sequenceCreateNestedManyWithoutFlow_sequenceInput";
import { Flow_sequenceCreateNestedOneWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceCreateNestedOneWithoutOther_flow_sequenceInput";
import { RuleCreateNestedOneWithoutFlow_sequenceInput } from "../inputs/RuleCreateNestedOneWithoutFlow_sequenceInput";

@TypeGraphQL.InputType("Flow_sequenceCreateInput", {})
export class Flow_sequenceCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  action_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  display_group?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  true_case?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionCreateNestedOneWithoutFlow_sequenceInput, {
    nullable: true
  })
  app_flow_action?: App_flow_actionCreateNestedOneWithoutFlow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFlow_sequenceInput, {
    nullable: false
  })
  flow!: FlowCreateNestedOneWithoutFlow_sequenceInput;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateNestedOneWithoutOther_flow_sequenceInput, {
    nullable: true
  })
  flow_sequence?: Flow_sequenceCreateNestedOneWithoutOther_flow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateNestedManyWithoutFlow_sequenceInput, {
    nullable: true
  })
  other_flow_sequence?: Flow_sequenceCreateNestedManyWithoutFlow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => RuleCreateNestedOneWithoutFlow_sequenceInput, {
    nullable: true
  })
  rule?: RuleCreateNestedOneWithoutFlow_sequenceInput | undefined;
}
