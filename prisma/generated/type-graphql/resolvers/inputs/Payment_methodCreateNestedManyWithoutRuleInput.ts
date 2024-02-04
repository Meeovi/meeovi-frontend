import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateManyRuleInputEnvelope } from "../inputs/Payment_methodCreateManyRuleInputEnvelope";
import { Payment_methodCreateOrConnectWithoutRuleInput } from "../inputs/Payment_methodCreateOrConnectWithoutRuleInput";
import { Payment_methodCreateWithoutRuleInput } from "../inputs/Payment_methodCreateWithoutRuleInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateNestedManyWithoutRuleInput", {})
export class Payment_methodCreateNestedManyWithoutRuleInput {
  @TypeGraphQL.Field(_type => [Payment_methodCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Payment_methodCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Payment_methodCreateManyRuleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput[] | undefined;
}
