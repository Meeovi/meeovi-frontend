import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeCreateNestedOneWithoutDelivery_time_translationInput } from "../inputs/Delivery_timeCreateNestedOneWithoutDelivery_time_translationInput";
import { LanguageCreateNestedOneWithoutDelivery_time_translationInput } from "../inputs/LanguageCreateNestedOneWithoutDelivery_time_translationInput";

@TypeGraphQL.InputType("Delivery_time_translationCreateInput", {})
export class Delivery_time_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeCreateNestedOneWithoutDelivery_time_translationInput, {
    nullable: false
  })
  delivery_time!: Delivery_timeCreateNestedOneWithoutDelivery_time_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutDelivery_time_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutDelivery_time_translationInput;
}
