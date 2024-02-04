import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutDelivery_time_translationInput } from "../inputs/LanguageCreateNestedOneWithoutDelivery_time_translationInput";

@TypeGraphQL.InputType("Delivery_time_translationCreateWithoutDelivery_timeInput", {})
export class Delivery_time_translationCreateWithoutDelivery_timeInput {
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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutDelivery_time_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutDelivery_time_translationInput;
}
