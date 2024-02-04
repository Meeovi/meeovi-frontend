import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CountryUpdateOneRequiredWithoutCurrency_country_roundingNestedInput } from "../inputs/CountryUpdateOneRequiredWithoutCurrency_country_roundingNestedInput";
import { CurrencyUpdateOneRequiredWithoutCurrency_country_roundingNestedInput } from "../inputs/CurrencyUpdateOneRequiredWithoutCurrency_country_roundingNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Currency_country_roundingUpdateInput", {})
export class Currency_country_roundingUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  item_rounding?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  total_rounding?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateOneRequiredWithoutCurrency_country_roundingNestedInput, {
    nullable: true
  })
  currency?: CurrencyUpdateOneRequiredWithoutCurrency_country_roundingNestedInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateOneRequiredWithoutCurrency_country_roundingNestedInput, {
    nullable: true
  })
  country?: CountryUpdateOneRequiredWithoutCurrency_country_roundingNestedInput | undefined;
}
