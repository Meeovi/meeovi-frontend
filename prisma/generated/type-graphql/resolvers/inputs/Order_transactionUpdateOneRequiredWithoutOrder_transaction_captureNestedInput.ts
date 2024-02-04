import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateOrConnectWithoutOrder_transaction_captureInput } from "../inputs/Order_transactionCreateOrConnectWithoutOrder_transaction_captureInput";
import { Order_transactionCreateWithoutOrder_transaction_captureInput } from "../inputs/Order_transactionCreateWithoutOrder_transaction_captureInput";
import { Order_transactionUpdateToOneWithWhereWithoutOrder_transaction_captureInput } from "../inputs/Order_transactionUpdateToOneWithWhereWithoutOrder_transaction_captureInput";
import { Order_transactionUpsertWithoutOrder_transaction_captureInput } from "../inputs/Order_transactionUpsertWithoutOrder_transaction_captureInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionUpdateOneRequiredWithoutOrder_transaction_captureNestedInput", {})
export class Order_transactionUpdateOneRequiredWithoutOrder_transaction_captureNestedInput {
  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutOrder_transaction_captureInput, {
    nullable: true
  })
  create?: Order_transactionCreateWithoutOrder_transaction_captureInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateOrConnectWithoutOrder_transaction_captureInput, {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutOrder_transaction_captureInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionUpsertWithoutOrder_transaction_captureInput, {
    nullable: true
  })
  upsert?: Order_transactionUpsertWithoutOrder_transaction_captureInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_transactionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionUpdateToOneWithWhereWithoutOrder_transaction_captureInput, {
    nullable: true
  })
  update?: Order_transactionUpdateToOneWithWhereWithoutOrder_transaction_captureInput | undefined;
}
