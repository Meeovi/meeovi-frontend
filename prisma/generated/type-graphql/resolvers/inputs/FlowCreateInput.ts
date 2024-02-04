import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventCreateNestedOneWithoutFlowInput } from "../inputs/App_flow_eventCreateNestedOneWithoutFlowInput";
import { Flow_sequenceCreateNestedManyWithoutFlowInput } from "../inputs/Flow_sequenceCreateNestedManyWithoutFlowInput";

@TypeGraphQL.InputType("FlowCreateInput", {})
export class FlowCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  event_name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priority?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  payload?: Buffer | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  invalid?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

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

  @TypeGraphQL.Field(_type => App_flow_eventCreateNestedOneWithoutFlowInput, {
    nullable: true
  })
  app_flow_event?: App_flow_eventCreateNestedOneWithoutFlowInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateNestedManyWithoutFlowInput, {
    nullable: true
  })
  flow_sequence?: Flow_sequenceCreateNestedManyWithoutFlowInput | undefined;
}
