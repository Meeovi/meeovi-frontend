import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CustomerUpdateManyWithoutCustomer_groupNestedInput } from "../inputs/CustomerUpdateManyWithoutCustomer_groupNestedInput";
import { Customer_group_registration_sales_channelsUpdateManyWithoutCustomer_groupNestedInput } from "../inputs/Customer_group_registration_sales_channelsUpdateManyWithoutCustomer_groupNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { Sales_channelUpdateManyWithoutCustomer_groupNestedInput } from "../inputs/Sales_channelUpdateManyWithoutCustomer_groupNestedInput";

@TypeGraphQL.InputType("Customer_groupUpdateWithoutCustomer_group_translationInput", {})
export class Customer_groupUpdateWithoutCustomer_group_translationInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  display_gross?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  registration_active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateManyWithoutCustomer_groupNestedInput, {
    nullable: true
  })
  customer?: CustomerUpdateManyWithoutCustomer_groupNestedInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsUpdateManyWithoutCustomer_groupNestedInput, {
    nullable: true
  })
  customer_group_registration_sales_channels?: Customer_group_registration_sales_channelsUpdateManyWithoutCustomer_groupNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateManyWithoutCustomer_groupNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateManyWithoutCustomer_groupNestedInput | undefined;
}
