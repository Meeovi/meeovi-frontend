import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MediaUpdateOneWithoutProduct_configurator_settingNestedInput } from "../inputs/MediaUpdateOneWithoutProduct_configurator_settingNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutProduct_configurator_settingNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_configurator_settingNestedInput";
import { Property_group_optionUpdateOneRequiredWithoutProduct_configurator_settingNestedInput } from "../inputs/Property_group_optionUpdateOneRequiredWithoutProduct_configurator_settingNestedInput";

@TypeGraphQL.InputType("Product_configurator_settingUpdateInput", {})
export class Product_configurator_settingUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  version_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateOneWithoutProduct_configurator_settingNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneWithoutProduct_configurator_settingNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_configurator_settingNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_configurator_settingNestedInput | undefined;

  @TypeGraphQL.Field(_type => Property_group_optionUpdateOneRequiredWithoutProduct_configurator_settingNestedInput, {
    nullable: true
  })
  property_group_option?: Property_group_optionUpdateOneRequiredWithoutProduct_configurator_settingNestedInput | undefined;
}
