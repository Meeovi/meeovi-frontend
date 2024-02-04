import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateNestedOneWithoutCartInput } from "../inputs/CurrencyCreateNestedOneWithoutCartInput";
import { CustomerCreateNestedOneWithoutCartInput } from "../inputs/CustomerCreateNestedOneWithoutCartInput";
import { Payment_methodCreateNestedOneWithoutCartInput } from "../inputs/Payment_methodCreateNestedOneWithoutCartInput";
import { Sales_channelCreateNestedOneWithoutCartInput } from "../inputs/Sales_channelCreateNestedOneWithoutCartInput";
import { Shipping_methodCreateNestedOneWithoutCartInput } from "../inputs/Shipping_methodCreateNestedOneWithoutCartInput";

@TypeGraphQL.InputType("CartCreateWithoutCountryInput", {})
export class CartCreateWithoutCountryInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cart!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  line_item_count!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  rule_ids!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  auto_increment?: bigint | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutCartInput, {
    nullable: false
  })
  currency!: CurrencyCreateNestedOneWithoutCartInput;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutCartInput, {
    nullable: true
  })
  customer?: CustomerCreateNestedOneWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateNestedOneWithoutCartInput, {
    nullable: false
  })
  payment_method!: Payment_methodCreateNestedOneWithoutCartInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutCartInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutCartInput;

  @TypeGraphQL.Field(_type => Shipping_methodCreateNestedOneWithoutCartInput, {
    nullable: false
  })
  shipping_method!: Shipping_methodCreateNestedOneWithoutCartInput;
}
