import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupUpdateOneRequiredWithoutCustomer_group_registration_sales_channelsNestedInput } from "../inputs/Customer_groupUpdateOneRequiredWithoutCustomer_group_registration_sales_channelsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Sales_channelUpdateOneRequiredWithoutCustomer_group_registration_sales_channelsNestedInput } from "../inputs/Sales_channelUpdateOneRequiredWithoutCustomer_group_registration_sales_channelsNestedInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsUpdateInput", {})
export class Customer_group_registration_sales_channelsUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpdateOneRequiredWithoutCustomer_group_registration_sales_channelsNestedInput, {
    nullable: true
  })
  customer_group?: Customer_groupUpdateOneRequiredWithoutCustomer_group_registration_sales_channelsNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateOneRequiredWithoutCustomer_group_registration_sales_channelsNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateOneRequiredWithoutCustomer_group_registration_sales_channelsNestedInput | undefined;
}
