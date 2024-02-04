import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { State_machine_history } from "../models/State_machine_history";
import { State_machine_state } from "../models/State_machine_state";
import { State_machine_transition } from "../models/State_machine_transition";
import { State_machine_translation } from "../models/State_machine_translation";
import { State_machineCount } from "../resolvers/outputs/State_machineCount";

@TypeGraphQL.ObjectType("State_machine", {})
export class State_machine {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  technical_name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  initial_state_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  state_machine_state_state_machine_initial_state_idTostate_machine_state?: State_machine_state | null;

  state_machine_history?: State_machine_history[];

  state_machine_state_state_machine_state_state_machine_idTostate_machine?: State_machine_state[];

  state_machine_transition?: State_machine_transition[];

  state_machine_translation?: State_machine_translation[];

  @TypeGraphQL.Field(_type => State_machineCount, {
    nullable: true
  })
  _count?: State_machineCount | null;
}
