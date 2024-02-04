import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_captureCreateManyOrder_transactionInputEnvelope } from "../inputs/Adyen_payment_captureCreateManyOrder_transactionInputEnvelope";
import { Adyen_payment_captureCreateOrConnectWithoutOrder_transactionInput } from "../inputs/Adyen_payment_captureCreateOrConnectWithoutOrder_transactionInput";
import { Adyen_payment_captureCreateWithoutOrder_transactionInput } from "../inputs/Adyen_payment_captureCreateWithoutOrder_transactionInput";
import { Adyen_payment_captureWhereUniqueInput } from "../inputs/Adyen_payment_captureWhereUniqueInput";

@TypeGraphQL.InputType("Adyen_payment_captureCreateNestedManyWithoutOrder_transactionInput", {})
export class Adyen_payment_captureCreateNestedManyWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => [Adyen_payment_captureCreateWithoutOrder_transactionInput], {
    nullable: true
  })
  create?: Adyen_payment_captureCreateWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_captureCreateOrConnectWithoutOrder_transactionInput], {
    nullable: true
  })
  connectOrCreate?: Adyen_payment_captureCreateOrConnectWithoutOrder_transactionInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureCreateManyOrder_transactionInputEnvelope, {
    nullable: true
  })
  createMany?: Adyen_payment_captureCreateManyOrder_transactionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_captureWhereUniqueInput], {
    nullable: true
  })
  connect?: Adyen_payment_captureWhereUniqueInput[] | undefined;
}
