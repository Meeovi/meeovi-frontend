import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateNestedOneWithoutOrder_transaction_capture_refund_positionInput } from "../inputs/Order_line_itemCreateNestedOneWithoutOrder_transaction_capture_refund_positionInput";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionCreateWithoutOrder_transaction_capture_refundInput", {})
export class Order_transaction_capture_refund_positionCreateWithoutOrder_transaction_capture_refundInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reason?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_reference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  amount!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateNestedOneWithoutOrder_transaction_capture_refund_positionInput, {
    nullable: false
  })
  order_line_item!: Order_line_itemCreateNestedOneWithoutOrder_transaction_capture_refund_positionInput;
}
