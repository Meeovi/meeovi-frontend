import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCreateOrConnectWithoutEvent_action_sales_channelInput } from "../inputs/Event_actionCreateOrConnectWithoutEvent_action_sales_channelInput";
import { Event_actionCreateWithoutEvent_action_sales_channelInput } from "../inputs/Event_actionCreateWithoutEvent_action_sales_channelInput";
import { Event_actionUpdateToOneWithWhereWithoutEvent_action_sales_channelInput } from "../inputs/Event_actionUpdateToOneWithWhereWithoutEvent_action_sales_channelInput";
import { Event_actionUpsertWithoutEvent_action_sales_channelInput } from "../inputs/Event_actionUpsertWithoutEvent_action_sales_channelInput";
import { Event_actionWhereUniqueInput } from "../inputs/Event_actionWhereUniqueInput";

@TypeGraphQL.InputType("Event_actionUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput", {})
export class Event_actionUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput {
  @TypeGraphQL.Field(_type => Event_actionCreateWithoutEvent_action_sales_channelInput, {
    nullable: true
  })
  create?: Event_actionCreateWithoutEvent_action_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionCreateOrConnectWithoutEvent_action_sales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Event_actionCreateOrConnectWithoutEvent_action_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionUpsertWithoutEvent_action_sales_channelInput, {
    nullable: true
  })
  upsert?: Event_actionUpsertWithoutEvent_action_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionWhereUniqueInput, {
    nullable: true
  })
  connect?: Event_actionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionUpdateToOneWithWhereWithoutEvent_action_sales_channelInput, {
    nullable: true
  })
  update?: Event_actionUpdateToOneWithWhereWithoutEvent_action_sales_channelInput | undefined;
}
