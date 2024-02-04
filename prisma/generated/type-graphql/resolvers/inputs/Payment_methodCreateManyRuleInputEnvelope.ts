import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateManyRuleInput } from "../inputs/Payment_methodCreateManyRuleInput";

@TypeGraphQL.InputType("Payment_methodCreateManyRuleInputEnvelope", {})
export class Payment_methodCreateManyRuleInputEnvelope {
  @TypeGraphQL.Field(_type => [Payment_methodCreateManyRuleInput], {
    nullable: false
  })
  data!: Payment_methodCreateManyRuleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
