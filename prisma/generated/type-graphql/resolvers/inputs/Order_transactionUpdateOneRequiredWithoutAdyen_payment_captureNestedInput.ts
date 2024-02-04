import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateOrConnectWithoutAdyen_payment_captureInput } from "../inputs/Order_transactionCreateOrConnectWithoutAdyen_payment_captureInput";
import { Order_transactionCreateWithoutAdyen_payment_captureInput } from "../inputs/Order_transactionCreateWithoutAdyen_payment_captureInput";
import { Order_transactionUpdateToOneWithWhereWithoutAdyen_payment_captureInput } from "../inputs/Order_transactionUpdateToOneWithWhereWithoutAdyen_payment_captureInput";
import { Order_transactionUpsertWithoutAdyen_payment_captureInput } from "../inputs/Order_transactionUpsertWithoutAdyen_payment_captureInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionUpdateOneRequiredWithoutAdyen_payment_captureNestedInput", {})
export class Order_transactionUpdateOneRequiredWithoutAdyen_payment_captureNestedInput {
  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutAdyen_payment_captureInput, {
    nullable: true
  })
  create?: Order_transactionCreateWithoutAdyen_payment_captureInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateOrConnectWithoutAdyen_payment_captureInput, {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutAdyen_payment_captureInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionUpsertWithoutAdyen_payment_captureInput, {
    nullable: true
  })
  upsert?: Order_transactionUpsertWithoutAdyen_payment_captureInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_transactionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionUpdateToOneWithWhereWithoutAdyen_payment_captureInput, {
    nullable: true
  })
  update?: Order_transactionUpdateToOneWithWhereWithoutAdyen_payment_captureInput | undefined;
}
