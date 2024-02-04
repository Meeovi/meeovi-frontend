import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CategoryUpdateOneRequiredWithoutMain_categoryNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutMain_categoryNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { Sales_channelUpdateOneRequiredWithoutMain_categoryNestedInput } from "../inputs/Sales_channelUpdateOneRequiredWithoutMain_categoryNestedInput";

@TypeGraphQL.InputType("Main_categoryUpdateWithoutProductInput", {})
export class Main_categoryUpdateWithoutProductInput {
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

  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutMain_categoryNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutMain_categoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateOneRequiredWithoutMain_categoryNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateOneRequiredWithoutMain_categoryNestedInput | undefined;
}
