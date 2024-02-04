import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleCreateNestedManyWithoutEvent_actionInput } from "../inputs/Event_action_ruleCreateNestedManyWithoutEvent_actionInput";

@TypeGraphQL.InputType("Event_actionCreateWithoutEvent_action_sales_channelInput", {})
export class Event_actionCreateWithoutEvent_action_sales_channelInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

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
  config?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  migrated_flow_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleCreateNestedManyWithoutEvent_actionInput, {
    nullable: true
  })
  event_action_rule?: Event_action_ruleCreateNestedManyWithoutEvent_actionInput | undefined;
}
