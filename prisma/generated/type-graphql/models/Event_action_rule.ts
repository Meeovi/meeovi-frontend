import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Event_action } from "../models/Event_action";
import { Rule } from "../models/Rule";

@TypeGraphQL.ObjectType("Event_action_rule", {})
export class Event_action_rule {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  event_action_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  rule_id!: Buffer;

  event_action?: Event_action;

  rule?: Rule;
}
