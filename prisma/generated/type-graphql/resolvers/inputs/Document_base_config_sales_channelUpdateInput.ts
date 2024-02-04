import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Document_base_configUpdateOneRequiredWithoutDocument_base_config_sales_channelNestedInput } from "../inputs/Document_base_configUpdateOneRequiredWithoutDocument_base_config_sales_channelNestedInput";
import { Document_typeUpdateOneRequiredWithoutDocument_base_config_sales_channelNestedInput } from "../inputs/Document_typeUpdateOneRequiredWithoutDocument_base_config_sales_channelNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { Sales_channelUpdateOneWithoutDocument_base_config_sales_channelNestedInput } from "../inputs/Sales_channelUpdateOneWithoutDocument_base_config_sales_channelNestedInput";

@TypeGraphQL.InputType("Document_base_config_sales_channelUpdateInput", {})
export class Document_base_config_sales_channelUpdateInput {
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

  @TypeGraphQL.Field(_type => Document_base_configUpdateOneRequiredWithoutDocument_base_config_sales_channelNestedInput, {
    nullable: true
  })
  document_base_config?: Document_base_configUpdateOneRequiredWithoutDocument_base_config_sales_channelNestedInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeUpdateOneRequiredWithoutDocument_base_config_sales_channelNestedInput, {
    nullable: true
  })
  document_type?: Document_typeUpdateOneRequiredWithoutDocument_base_config_sales_channelNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateOneWithoutDocument_base_config_sales_channelNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateOneWithoutDocument_base_config_sales_channelNestedInput | undefined;
}
