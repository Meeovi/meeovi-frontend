import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateNestedOneWithoutOrderInput } from "../inputs/CurrencyCreateNestedOneWithoutOrderInput";
import { DocumentCreateNestedManyWithoutOrderInput } from "../inputs/DocumentCreateNestedManyWithoutOrderInput";
import { Klarna_order_extensionCreateNestedManyWithoutOrderInput } from "../inputs/Klarna_order_extensionCreateNestedManyWithoutOrderInput";
import { LanguageCreateNestedOneWithoutOrderInput } from "../inputs/LanguageCreateNestedOneWithoutOrderInput";
import { Order_addressCreateNestedManyWithoutOrderInput } from "../inputs/Order_addressCreateNestedManyWithoutOrderInput";
import { Order_customerCreateNestedManyWithoutOrderInput } from "../inputs/Order_customerCreateNestedManyWithoutOrderInput";
import { Order_deliveryCreateNestedManyWithoutOrderInput } from "../inputs/Order_deliveryCreateNestedManyWithoutOrderInput";
import { Order_line_itemCreateNestedManyWithoutOrderInput } from "../inputs/Order_line_itemCreateNestedManyWithoutOrderInput";
import { Order_tagCreateNestedManyWithoutOrderInput } from "../inputs/Order_tagCreateNestedManyWithoutOrderInput";
import { Order_transactionCreateNestedManyWithoutOrderInput } from "../inputs/Order_transactionCreateNestedManyWithoutOrderInput";
import { Sales_channelCreateNestedOneWithoutOrderInput } from "../inputs/Sales_channelCreateNestedOneWithoutOrderInput";
import { UserCreateNestedOneWithoutOrder_order_created_by_idTouserInput } from "../inputs/UserCreateNestedOneWithoutOrder_order_created_by_idTouserInput";

@TypeGraphQL.InputType("OrderCreateWithoutUser_order_updated_by_idTouserInput", {})
export class OrderCreateWithoutUser_order_updated_by_idTouserInput {
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
  state_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  auto_increment?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  order_number?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  currency_factor?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  billing_address_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  billing_address_version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  order_date_time!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  order_date?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  amount_total?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  amount_net?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  position_price?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipping_costs!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  shipping_total?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deep_link_code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  affiliate_code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaign_code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_comment?: string | undefined;

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
  item_rounding?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  total_rounding?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rule_ids?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source?: string | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  document?: DocumentCreateNestedManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  klarna_order_extension?: Klarna_order_extensionCreateNestedManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutOrderInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutOrderInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOrder_order_created_by_idTouserInput, {
    nullable: true
  })
  user_order_created_by_idTouser?: UserCreateNestedOneWithoutOrder_order_created_by_idTouserInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutOrderInput, {
    nullable: false
  })
  currency!: CurrencyCreateNestedOneWithoutOrderInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutOrderInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutOrderInput;

  @TypeGraphQL.Field(_type => Order_addressCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  order_address?: Order_addressCreateNestedManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => Order_customerCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  order_customer?: Order_customerCreateNestedManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  order_delivery?: Order_deliveryCreateNestedManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemCreateNestedManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => Order_tagCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  order_tag?: Order_tagCreateNestedManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  order_transaction?: Order_transactionCreateNestedManyWithoutOrderInput | undefined;
}
