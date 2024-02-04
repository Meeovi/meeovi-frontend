import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleCreateManyEvent_actionInputEnvelope } from "../inputs/Event_action_ruleCreateManyEvent_actionInputEnvelope";
import { Event_action_ruleCreateOrConnectWithoutEvent_actionInput } from "../inputs/Event_action_ruleCreateOrConnectWithoutEvent_actionInput";
import { Event_action_ruleCreateWithoutEvent_actionInput } from "../inputs/Event_action_ruleCreateWithoutEvent_actionInput";
import { Event_action_ruleScalarWhereInput } from "../inputs/Event_action_ruleScalarWhereInput";
import { Event_action_ruleUpdateManyWithWhereWithoutEvent_actionInput } from "../inputs/Event_action_ruleUpdateManyWithWhereWithoutEvent_actionInput";
import { Event_action_ruleUpdateWithWhereUniqueWithoutEvent_actionInput } from "../inputs/Event_action_ruleUpdateWithWhereUniqueWithoutEvent_actionInput";
import { Event_action_ruleUpsertWithWhereUniqueWithoutEvent_actionInput } from "../inputs/Event_action_ruleUpsertWithWhereUniqueWithoutEvent_actionInput";
import { Event_action_ruleWhereUniqueInput } from "../inputs/Event_action_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_ruleUpdateManyWithoutEvent_actionNestedInput", {})
export class Event_action_ruleUpdateManyWithoutEvent_actionNestedInput {
  @TypeGraphQL.Field(_type => [Event_action_ruleCreateWithoutEvent_actionInput], {
    nullable: true
  })
  create?: Event_action_ruleCreateWithoutEvent_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleCreateOrConnectWithoutEvent_actionInput], {
    nullable: true
  })
  connectOrCreate?: Event_action_ruleCreateOrConnectWithoutEvent_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleUpsertWithWhereUniqueWithoutEvent_actionInput], {
    nullable: true
  })
  upsert?: Event_action_ruleUpsertWithWhereUniqueWithoutEvent_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleCreateManyEvent_actionInputEnvelope, {
    nullable: true
  })
  createMany?: Event_action_ruleCreateManyEvent_actionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleWhereUniqueInput], {
    nullable: true
  })
  set?: Event_action_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Event_action_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleWhereUniqueInput], {
    nullable: true
  })
  delete?: Event_action_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Event_action_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleUpdateWithWhereUniqueWithoutEvent_actionInput], {
    nullable: true
  })
  update?: Event_action_ruleUpdateWithWhereUniqueWithoutEvent_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleUpdateManyWithWhereWithoutEvent_actionInput], {
    nullable: true
  })
  updateMany?: Event_action_ruleUpdateManyWithWhereWithoutEvent_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Event_action_ruleScalarWhereInput[] | undefined;
}
