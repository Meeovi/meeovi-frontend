import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInputEnvelope } from "../inputs/CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInputEnvelope";
import { CustomerCreateOrConnectWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerCreateOrConnectWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput";
import { CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerUpdateManyWithWhereWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput";
import { CustomerUpdateWithWhereUniqueWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput";
import { CustomerUpsertWithWhereUniqueWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodNestedInput", {})
export class CustomerUpdateManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodNestedInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput], {
    nullable: true
  })
  upsert?: CustomerUpsertWithWhereUniqueWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyPayment_method_customer_default_payment_method_idTopayment_methodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  set?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  delete?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput], {
    nullable: true
  })
  update?: CustomerUpdateWithWhereUniqueWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput], {
    nullable: true
  })
  updateMany?: CustomerUpdateManyWithWhereWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerScalarWhereInput[] | undefined;
}
