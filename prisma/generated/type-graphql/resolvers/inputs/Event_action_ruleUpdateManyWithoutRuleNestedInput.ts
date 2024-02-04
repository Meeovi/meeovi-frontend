import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleCreateManyRuleInputEnvelope } from "../inputs/Event_action_ruleCreateManyRuleInputEnvelope";
import { Event_action_ruleCreateOrConnectWithoutRuleInput } from "../inputs/Event_action_ruleCreateOrConnectWithoutRuleInput";
import { Event_action_ruleCreateWithoutRuleInput } from "../inputs/Event_action_ruleCreateWithoutRuleInput";
import { Event_action_ruleScalarWhereInput } from "../inputs/Event_action_ruleScalarWhereInput";
import { Event_action_ruleUpdateManyWithWhereWithoutRuleInput } from "../inputs/Event_action_ruleUpdateManyWithWhereWithoutRuleInput";
import { Event_action_ruleUpdateWithWhereUniqueWithoutRuleInput } from "../inputs/Event_action_ruleUpdateWithWhereUniqueWithoutRuleInput";
import { Event_action_ruleUpsertWithWhereUniqueWithoutRuleInput } from "../inputs/Event_action_ruleUpsertWithWhereUniqueWithoutRuleInput";
import { Event_action_ruleWhereUniqueInput } from "../inputs/Event_action_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_ruleUpdateManyWithoutRuleNestedInput", {})
export class Event_action_ruleUpdateManyWithoutRuleNestedInput {
  @TypeGraphQL.Field(_type => [Event_action_ruleCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Event_action_ruleCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Event_action_ruleCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleUpsertWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  upsert?: Event_action_ruleUpsertWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Event_action_ruleCreateManyRuleInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Event_action_ruleUpdateWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  update?: Event_action_ruleUpdateWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleUpdateManyWithWhereWithoutRuleInput], {
    nullable: true
  })
  updateMany?: Event_action_ruleUpdateManyWithWhereWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Event_action_ruleScalarWhereInput[] | undefined;
}
