import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { Number_rangeUpdateOneRequiredWithoutNumber_range_sales_channelNestedInput } from "../inputs/Number_rangeUpdateOneRequiredWithoutNumber_range_sales_channelNestedInput";
import { Number_range_typeUpdateOneRequiredWithoutNumber_range_sales_channelNestedInput } from "../inputs/Number_range_typeUpdateOneRequiredWithoutNumber_range_sales_channelNestedInput";

@TypeGraphQL.InputType("Number_range_sales_channelUpdateWithoutSales_channelInput", {})
export class Number_range_sales_channelUpdateWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeUpdateOneRequiredWithoutNumber_range_sales_channelNestedInput, {
    nullable: true
  })
  number_range?: Number_rangeUpdateOneRequiredWithoutNumber_range_sales_channelNestedInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeUpdateOneRequiredWithoutNumber_range_sales_channelNestedInput, {
    nullable: true
  })
  number_range_type?: Number_range_typeUpdateOneRequiredWithoutNumber_range_sales_channelNestedInput | undefined;
}
