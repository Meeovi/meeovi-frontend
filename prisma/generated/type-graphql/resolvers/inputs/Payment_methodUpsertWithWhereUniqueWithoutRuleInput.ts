import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateWithoutRuleInput } from "../inputs/Payment_methodCreateWithoutRuleInput";
import { Payment_methodUpdateWithoutRuleInput } from "../inputs/Payment_methodUpdateWithoutRuleInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpsertWithWhereUniqueWithoutRuleInput", {})
export class Payment_methodUpsertWithWhereUniqueWithoutRuleInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutRuleInput, {
    nullable: false
  })
  update!: Payment_methodUpdateWithoutRuleInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateWithoutRuleInput, {
    nullable: false
  })
  create!: Payment_methodCreateWithoutRuleInput;
}
