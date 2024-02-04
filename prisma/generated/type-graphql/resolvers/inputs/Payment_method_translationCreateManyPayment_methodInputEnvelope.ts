import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationCreateManyPayment_methodInput } from "../inputs/Payment_method_translationCreateManyPayment_methodInput";

@TypeGraphQL.InputType("Payment_method_translationCreateManyPayment_methodInputEnvelope", {})
export class Payment_method_translationCreateManyPayment_methodInputEnvelope {
  @TypeGraphQL.Field(_type => [Payment_method_translationCreateManyPayment_methodInput], {
    nullable: false
  })
  data!: Payment_method_translationCreateManyPayment_methodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
