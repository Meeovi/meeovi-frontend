import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { Customer_wishlistUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput } from "../inputs/Customer_wishlistUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput";

@TypeGraphQL.InputType("Customer_wishlist_productUpdateInput", {})
export class Customer_wishlist_productUpdateInput {
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

  @TypeGraphQL.Field(_type => Customer_wishlistUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput, {
    nullable: true
  })
  customer_wishlist?: Customer_wishlistUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput | undefined;
}
