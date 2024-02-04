import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Event_action_rule } from "../models/Event_action_rule";
import { Event_action_sales_channel } from "../models/Event_action_sales_channel";
import { Event_actionCount } from "../resolvers/outputs/Event_actionCount";

@TypeGraphQL.ObjectType("Event_action", {})
export class Event_action {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  event_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  action_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  migrated_flow_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  event_action_rule?: Event_action_rule[];

  event_action_sales_channel?: Event_action_sales_channel[];

  @TypeGraphQL.Field(_type => Event_actionCount, {
    nullable: true
  })
  _count?: Event_actionCount | null;
}
