import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundCreateOrConnectWithoutOrder_transaction_capture_refund_positionInput } from "../inputs/Order_transaction_capture_refundCreateOrConnectWithoutOrder_transaction_capture_refund_positionInput";
import { Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput } from "../inputs/Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput";
import { Order_transaction_capture_refundUpdateToOneWithWhereWithoutOrder_transaction_capture_refund_positionInput } from "../inputs/Order_transaction_capture_refundUpdateToOneWithWhereWithoutOrder_transaction_capture_refund_positionInput";
import { Order_transaction_capture_refundUpsertWithoutOrder_transaction_capture_refund_positionInput } from "../inputs/Order_transaction_capture_refundUpsertWithoutOrder_transaction_capture_refund_positionInput";
import { Order_transaction_capture_refundWhereUniqueInput } from "../inputs/Order_transaction_capture_refundWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_capture_refundUpdateOneRequiredWithoutOrder_transaction_capture_refund_positionNestedInput", {})
export class Order_transaction_capture_refundUpdateOneRequiredWithoutOrder_transaction_capture_refund_positionNestedInput {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput, {
    nullable: true
  })
  create?: Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundCreateOrConnectWithoutOrder_transaction_capture_refund_positionInput, {
    nullable: true
  })
  connectOrCreate?: Order_transaction_capture_refundCreateOrConnectWithoutOrder_transaction_capture_refund_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundUpsertWithoutOrder_transaction_capture_refund_positionInput, {
    nullable: true
  })
  upsert?: Order_transaction_capture_refundUpsertWithoutOrder_transaction_capture_refund_positionInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_transaction_capture_refundWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundUpdateToOneWithWhereWithoutOrder_transaction_capture_refund_positionInput, {
    nullable: true
  })
  update?: Order_transaction_capture_refundUpdateToOneWithWhereWithoutOrder_transaction_capture_refund_positionInput | undefined;
}
