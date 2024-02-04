import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentCreateManyOrder_transactionInputEnvelope } from "../inputs/Adyen_paymentCreateManyOrder_transactionInputEnvelope";
import { Adyen_paymentCreateOrConnectWithoutOrder_transactionInput } from "../inputs/Adyen_paymentCreateOrConnectWithoutOrder_transactionInput";
import { Adyen_paymentCreateWithoutOrder_transactionInput } from "../inputs/Adyen_paymentCreateWithoutOrder_transactionInput";
import { Adyen_paymentWhereUniqueInput } from "../inputs/Adyen_paymentWhereUniqueInput";

@TypeGraphQL.InputType("Adyen_paymentCreateNestedManyWithoutOrder_transactionInput", {})
export class Adyen_paymentCreateNestedManyWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => [Adyen_paymentCreateWithoutOrder_transactionInput], {
    nullable: true
  })
  create?: Adyen_paymentCreateWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentCreateOrConnectWithoutOrder_transactionInput], {
    nullable: true
  })
  connectOrCreate?: Adyen_paymentCreateOrConnectWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_paymentCreateManyOrder_transactionInputEnvelope, {
    nullable: true
  })
  createMany?: Adyen_paymentCreateManyOrder_transactionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Adyen_paymentWhereUniqueInput], {
    nullable: true
  })
  connect?: Adyen_paymentWhereUniqueInput[] | undefined;
}
