import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodUpdateWithoutRuleInput } from "../inputs/Payment_methodUpdateWithoutRuleInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpdateWithWhereUniqueWithoutRuleInput", {})
export class Payment_methodUpdateWithWhereUniqueWithoutRuleInput {
  @TypeGraphQL.Field(_type => Payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: Payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => Payment_methodUpdateWithoutRuleInput, {
    nullable: false
  })
  data!: Payment_methodUpdateWithoutRuleInput;
}
