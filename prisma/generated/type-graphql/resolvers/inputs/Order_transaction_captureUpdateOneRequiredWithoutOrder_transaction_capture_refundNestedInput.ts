import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCreateOrConnectWithoutOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_captureCreateOrConnectWithoutOrder_transaction_capture_refundInput";
import { Order_transaction_captureCreateWithoutOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_captureCreateWithoutOrder_transaction_capture_refundInput";
import { Order_transaction_captureUpdateToOneWithWhereWithoutOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_captureUpdateToOneWithWhereWithoutOrder_transaction_capture_refundInput";
import { Order_transaction_captureUpsertWithoutOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_captureUpsertWithoutOrder_transaction_capture_refundInput";
import { Order_transaction_captureWhereUniqueInput } from "../inputs/Order_transaction_captureWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_captureUpdateOneRequiredWithoutOrder_transaction_capture_refundNestedInput", {})
export class Order_transaction_captureUpdateOneRequiredWithoutOrder_transaction_capture_refundNestedInput {
  @TypeGraphQL.Field(_type => Order_transaction_captureCreateWithoutOrder_transaction_capture_refundInput, {
    nullable: true
  })
  create?: Order_transaction_captureCreateWithoutOrder_transaction_capture_refundInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureCreateOrConnectWithoutOrder_transaction_capture_refundInput, {
    nullable: true
  })
  connectOrCreate?: Order_transaction_captureCreateOrConnectWithoutOrder_transaction_capture_refundInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureUpsertWithoutOrder_transaction_capture_refundInput, {
    nullable: true
  })
  upsert?: Order_transaction_captureUpsertWithoutOrder_transaction_capture_refundInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_transaction_captureWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureUpdateToOneWithWhereWithoutOrder_transaction_capture_refundInput, {
    nullable: true
  })
  update?: Order_transaction_captureUpdateToOneWithWhereWithoutOrder_transaction_capture_refundInput | undefined;
}
