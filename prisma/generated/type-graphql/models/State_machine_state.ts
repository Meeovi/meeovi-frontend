import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order_transaction } from "../models/Order_transaction";
import { Order_transaction_capture } from "../models/Order_transaction_capture";
import { Order_transaction_capture_refund } from "../models/Order_transaction_capture_refund";
import { State_machine } from "../models/State_machine";
import { State_machine_history } from "../models/State_machine_history";
import { State_machine_state_translation } from "../models/State_machine_state_translation";
import { State_machine_transition } from "../models/State_machine_transition";
import { State_machine_stateCount } from "../resolvers/outputs/State_machine_stateCount";

@TypeGraphQL.ObjectType("State_machine_state", {})
export class State_machine_state {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  technical_name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  state_machine_id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  order_transaction?: Order_transaction[];

  order_transaction_capture?: Order_transaction_capture[];

  order_transaction_capture_refund?: Order_transaction_capture_refund[];

  state_machine_state_machine_initial_state_idTostate_machine_state?: State_machine[];

  state_machine_history_state_machine_history_from_state_idTostate_machine_state?: State_machine_history[];

  state_machine_history_state_machine_history_to_state_idTostate_machine_state?: State_machine_history[];

  state_machine_state_machine_state_state_machine_idTostate_machine?: State_machine;

  state_machine_state_translation?: State_machine_state_translation[];

  state_machine_transition_state_machine_transition_from_state_idTostate_machine_state?: State_machine_transition[];

  state_machine_transition_state_machine_transition_to_state_idTostate_machine_state?: State_machine_transition[];

  @TypeGraphQL.Field(_type => State_machine_stateCount, {
    nullable: true
  })
  _count?: State_machine_stateCount | null;
}
