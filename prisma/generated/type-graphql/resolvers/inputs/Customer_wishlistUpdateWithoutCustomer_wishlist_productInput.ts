import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CustomerUpdateOneRequiredWithoutCustomer_wishlistNestedInput } from "../inputs/CustomerUpdateOneRequiredWithoutCustomer_wishlistNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Sales_channelUpdateOneRequiredWithoutCustomer_wishlistNestedInput } from "../inputs/Sales_channelUpdateOneRequiredWithoutCustomer_wishlistNestedInput";

@TypeGraphQL.InputType("Customer_wishlistUpdateWithoutCustomer_wishlist_productInput", {})
export class Customer_wishlistUpdateWithoutCustomer_wishlist_productInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  custom_fields?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateOneRequiredWithoutCustomer_wishlistNestedInput, {
    nullable: true
  })
  customer?: CustomerUpdateOneRequiredWithoutCustomer_wishlistNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateOneRequiredWithoutCustomer_wishlistNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateOneRequiredWithoutCustomer_wishlistNestedInput | undefined;
}
