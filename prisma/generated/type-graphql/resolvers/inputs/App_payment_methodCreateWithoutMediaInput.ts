import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateNestedOneWithoutApp_payment_methodInput } from "../inputs/AppCreateNestedOneWithoutApp_payment_methodInput";
import { Payment_methodCreateNestedOneWithoutApp_payment_methodInput } from "../inputs/Payment_methodCreateNestedOneWithoutApp_payment_methodInput";

@TypeGraphQL.InputType("App_payment_methodCreateWithoutMediaInput", {})
export class App_payment_methodCreateWithoutMediaInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  app_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pay_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  finalize_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  validate_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  capture_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refund_url?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  recurring_url?: string | undefined;

  @TypeGraphQL.Field(_type => AppCreateNestedOneWithoutApp_payment_methodInput, {
    nullable: true
  })
  app?: AppCreateNestedOneWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateNestedOneWithoutApp_payment_methodInput, {
    nullable: false
  })
  payment_method!: Payment_methodCreateNestedOneWithoutApp_payment_methodInput;
}
