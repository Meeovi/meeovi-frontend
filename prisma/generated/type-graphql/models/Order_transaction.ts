import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Adyen_payment } from "../models/Adyen_payment";
import { Adyen_payment_capture } from "../models/Adyen_payment_capture";
import { Adyen_refund } from "../models/Adyen_refund";
import { Order } from "../models/Order";
import { Order_transaction_capture } from "../models/Order_transaction_capture";
import { Payment_method } from "../models/Payment_method";
import { State_machine_state } from "../models/State_machine_state";
import { Order_transactionCount } from "../resolvers/outputs/Order_transactionCount";

@TypeGraphQL.ObjectType("Order_transaction", {})
export class Order_transaction {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  order_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  order_version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  state_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  payment_method_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  amount!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  adyen_payment?: Adyen_payment[];

  adyen_payment_capture?: Adyen_payment_capture[];

  adyen_refund?: Adyen_refund[];

  order?: Order;

  payment_method?: Payment_method;

  state_machine_state?: State_machine_state;

  order_transaction_capture?: Order_transaction_capture[];

  @TypeGraphQL.Field(_type => Order_transactionCount, {
    nullable: true
  })
  _count?: Order_transactionCount | null;
}
