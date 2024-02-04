import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateManyRuleInputEnvelope } from "../inputs/Payment_methodCreateManyRuleInputEnvelope";
import { Payment_methodCreateOrConnectWithoutRuleInput } from "../inputs/Payment_methodCreateOrConnectWithoutRuleInput";
import { Payment_methodCreateWithoutRuleInput } from "../inputs/Payment_methodCreateWithoutRuleInput";
import { Payment_methodScalarWhereInput } from "../inputs/Payment_methodScalarWhereInput";
import { Payment_methodUpdateManyWithWhereWithoutRuleInput } from "../inputs/Payment_methodUpdateManyWithWhereWithoutRuleInput";
import { Payment_methodUpdateWithWhereUniqueWithoutRuleInput } from "../inputs/Payment_methodUpdateWithWhereUniqueWithoutRuleInput";
import { Payment_methodUpsertWithWhereUniqueWithoutRuleInput } from "../inputs/Payment_methodUpsertWithWhereUniqueWithoutRuleInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpdateManyWithoutRuleNestedInput", {})
export class Payment_methodUpdateManyWithoutRuleNestedInput {
  @TypeGraphQL.Field(_type => [Payment_methodCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Payment_methodCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodUpsertWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  upsert?: Payment_methodUpsertWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Payment_methodCreateManyRuleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  set?: Payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  delete?: Payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodUpdateWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  update?: Payment_methodUpdateWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodUpdateManyWithWhereWithoutRuleInput], {
    nullable: true
  })
  updateMany?: Payment_methodUpdateManyWithWhereWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Payment_methodScalarWhereInput[] | undefined;
}
