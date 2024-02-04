import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInput";

@TypeGraphQL.InputType("CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInputEnvelope", {})
export class CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInput], {
    nullable: false
  })
  data!: CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
