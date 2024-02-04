import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Adyen_notificationCreateManyInput", {})
export class Adyen_notificationCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pspreference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  original_reference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  merchant_reference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  event_code?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  success?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_method?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  amount_value?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  amount_currency?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reason?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  live?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_data?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  done?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  processing?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  scheduled_processing_time?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  error_count?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  error_message?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
