import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCreateOrConnectWithoutEvent_action_ruleInput } from "../inputs/Event_actionCreateOrConnectWithoutEvent_action_ruleInput";
import { Event_actionCreateWithoutEvent_action_ruleInput } from "../inputs/Event_actionCreateWithoutEvent_action_ruleInput";
import { Event_actionUpdateToOneWithWhereWithoutEvent_action_ruleInput } from "../inputs/Event_actionUpdateToOneWithWhereWithoutEvent_action_ruleInput";
import { Event_actionUpsertWithoutEvent_action_ruleInput } from "../inputs/Event_actionUpsertWithoutEvent_action_ruleInput";
import { Event_actionWhereUniqueInput } from "../inputs/Event_actionWhereUniqueInput";

@TypeGraphQL.InputType("Event_actionUpdateOneRequiredWithoutEvent_action_ruleNestedInput", {})
export class Event_actionUpdateOneRequiredWithoutEvent_action_ruleNestedInput {
  @TypeGraphQL.Field(_type => Event_actionCreateWithoutEvent_action_ruleInput, {
    nullable: true
  })
  create?: Event_actionCreateWithoutEvent_action_ruleInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionCreateOrConnectWithoutEvent_action_ruleInput, {
    nullable: true
  })
  connectOrCreate?: Event_actionCreateOrConnectWithoutEvent_action_ruleInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionUpsertWithoutEvent_action_ruleInput, {
    nullable: true
  })
  upsert?: Event_actionUpsertWithoutEvent_action_ruleInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionWhereUniqueInput, {
    nullable: true
  })
  connect?: Event_actionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionUpdateToOneWithWhereWithoutEvent_action_ruleInput, {
    nullable: true
  })
  update?: Event_actionUpdateToOneWithWhereWithoutEvent_action_ruleInput | undefined;
}
