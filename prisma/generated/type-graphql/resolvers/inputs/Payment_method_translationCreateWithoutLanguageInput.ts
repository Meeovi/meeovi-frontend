import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateNestedOneWithoutPayment_method_translationInput } from "../inputs/Payment_methodCreateNestedOneWithoutPayment_method_translationInput";

@TypeGraphQL.InputType("Payment_method_translationCreateWithoutLanguageInput", {})
export class Payment_method_translationCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  distinguishable_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

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

  @TypeGraphQL.Field(_type => Payment_methodCreateNestedOneWithoutPayment_method_translationInput, {
    nullable: false
  })
  payment_method!: Payment_methodCreateNestedOneWithoutPayment_method_translationInput;
}
