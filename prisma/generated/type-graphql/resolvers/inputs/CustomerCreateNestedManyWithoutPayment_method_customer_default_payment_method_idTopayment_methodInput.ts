import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInputEnvelope } from "../inputs/CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInputEnvelope";
import { CustomerCreateOrConnectWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerCreateOrConnectWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput";
import { CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput", {})
export class CustomerCreateNestedManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;
}
