import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { State_machine } from "../models/State_machine";
import { State_machine_state } from "../models/State_machine_state";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("State_machine_history", {})
export class State_machine_history {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  state_machine_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entity_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entity_id!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  from_state_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  to_state_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  action_name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  user_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  referenced_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  referenced_version_id?: Buffer | null;

  state_machine_state_state_machine_history_from_state_idTostate_machine_state?: State_machine_state;

  state_machine?: State_machine;

  state_machine_state_state_machine_history_to_state_idTostate_machine_state?: State_machine_state;

  user?: User | null;
}
