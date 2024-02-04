import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateNestedOneWithoutPayment_methodInput } from "../inputs/App_payment_methodCreateNestedOneWithoutPayment_methodInput";
import { CartCreateNestedManyWithoutPayment_methodInput } from "../inputs/CartCreateNestedManyWithoutPayment_methodInput";
import { CustomerCreateNestedManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput } from "../inputs/CustomerCreateNestedManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput";
import { CustomerCreateNestedManyWithoutPayment_method_customer_last_payment_method_idTopayment_methodInput } from "../inputs/CustomerCreateNestedManyWithoutPayment_method_customer_last_payment_method_idTopayment_methodInput";
import { MediaCreateNestedOneWithoutPayment_methodInput } from "../inputs/MediaCreateNestedOneWithoutPayment_methodInput";
import { Order_transactionCreateNestedManyWithoutPayment_methodInput } from "../inputs/Order_transactionCreateNestedManyWithoutPayment_methodInput";
import { PluginCreateNestedOneWithoutPayment_methodInput } from "../inputs/PluginCreateNestedOneWithoutPayment_methodInput";
import { RuleCreateNestedOneWithoutPayment_methodInput } from "../inputs/RuleCreateNestedOneWithoutPayment_methodInput";
import { Sales_channelCreateNestedManyWithoutPayment_methodInput } from "../inputs/Sales_channelCreateNestedManyWithoutPayment_methodInput";
import { Sales_channel_payment_methodCreateNestedManyWithoutPayment_methodInput } from "../inputs/Sales_channel_payment_methodCreateNestedManyWithoutPayment_methodInput";

@TypeGraphQL.InputType("Payment_methodCreateWithoutPayment_method_translationInput", {})
export class Payment_methodCreateWithoutPayment_method_translationInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  handler_identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  after_order_enabled?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technical_name?: string | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodCreateNestedOneWithoutPayment_methodInput, {
    nullable: true
  })
  app_payment_method?: App_payment_methodCreateNestedOneWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => CartCreateNestedManyWithoutPayment_methodInput, {
    nullable: true
  })
  cart?: CartCreateNestedManyWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput, {
    nullable: true
  })
  customer_customer_default_payment_method_idTopayment_method?: CustomerCreateNestedManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateNestedManyWithoutPayment_method_customer_last_payment_method_idTopayment_methodInput, {
    nullable: true
  })
  customer_customer_last_payment_method_idTopayment_method?: CustomerCreateNestedManyWithoutPayment_method_customer_last_payment_method_idTopayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateNestedManyWithoutPayment_methodInput, {
    nullable: true
  })
  order_transaction?: Order_transactionCreateNestedManyWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => RuleCreateNestedOneWithoutPayment_methodInput, {
    nullable: true
  })
  rule?: RuleCreateNestedOneWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutPayment_methodInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => PluginCreateNestedOneWithoutPayment_methodInput, {
    nullable: true
  })
  plugin?: PluginCreateNestedOneWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedManyWithoutPayment_methodInput, {
    nullable: true
  })
  sales_channel?: Sales_channelCreateNestedManyWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_payment_methodCreateNestedManyWithoutPayment_methodInput, {
    nullable: true
  })
  sales_channel_payment_method?: Sales_channel_payment_methodCreateNestedManyWithoutPayment_methodInput | undefined;
}
