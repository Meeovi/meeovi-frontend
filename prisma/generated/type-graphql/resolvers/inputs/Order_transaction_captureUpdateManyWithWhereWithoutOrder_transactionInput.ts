import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureScalarWhereInput } from "../inputs/Order_transaction_captureScalarWhereInput";
import { Order_transaction_captureUpdateManyMutationInput } from "../inputs/Order_transaction_captureUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_transaction_captureUpdateManyWithWhereWithoutOrder_transactionInput", {})
export class Order_transaction_captureUpdateManyWithWhereWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => Order_transaction_captureScalarWhereInput, {
    nullable: false
  })
  where!: Order_transaction_captureScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_transaction_captureUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_transaction_captureUpdateManyMutationInput;
}
