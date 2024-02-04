import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { Country_state_translationUpdateManyWithoutCountry_stateNestedInput } from "../inputs/Country_state_translationUpdateManyWithoutCountry_stateNestedInput";
import { Customer_addressUpdateManyWithoutCountry_stateNestedInput } from "../inputs/Customer_addressUpdateManyWithoutCountry_stateNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { Order_addressUpdateManyWithoutCountry_stateNestedInput } from "../inputs/Order_addressUpdateManyWithoutCountry_stateNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Country_stateUpdateWithoutCountryInput", {})
export class Country_stateUpdateWithoutCountryInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  short_code?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationUpdateManyWithoutCountry_stateNestedInput, {
    nullable: true
  })
  country_state_translation?: Country_state_translationUpdateManyWithoutCountry_stateNestedInput | undefined;

  @TypeGraphQL.Field(_type => Customer_addressUpdateManyWithoutCountry_stateNestedInput, {
    nullable: true
  })
  customer_address?: Customer_addressUpdateManyWithoutCountry_stateNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressUpdateManyWithoutCountry_stateNestedInput, {
    nullable: true
  })
  order_address?: Order_addressUpdateManyWithoutCountry_stateNestedInput | undefined;
}
