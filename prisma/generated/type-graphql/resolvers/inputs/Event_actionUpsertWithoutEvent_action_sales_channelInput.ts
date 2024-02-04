import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCreateWithoutEvent_action_sales_channelInput } from "../inputs/Event_actionCreateWithoutEvent_action_sales_channelInput";
import { Event_actionUpdateWithoutEvent_action_sales_channelInput } from "../inputs/Event_actionUpdateWithoutEvent_action_sales_channelInput";
import { Event_actionWhereInput } from "../inputs/Event_actionWhereInput";

@TypeGraphQL.InputType("Event_actionUpsertWithoutEvent_action_sales_channelInput", {})
export class Event_actionUpsertWithoutEvent_action_sales_channelInput {
  @TypeGraphQL.Field(_type => Event_actionUpdateWithoutEvent_action_sales_channelInput, {
    nullable: false
  })
  update!: Event_actionUpdateWithoutEvent_action_sales_channelInput;

  @TypeGraphQL.Field(_type => Event_actionCreateWithoutEvent_action_sales_channelInput, {
    nullable: false
  })
  create!: Event_actionCreateWithoutEvent_action_sales_channelInput;

  @TypeGraphQL.Field(_type => Event_actionWhereInput, {
    nullable: true
  })
  where?: Event_actionWhereInput | undefined;
}
