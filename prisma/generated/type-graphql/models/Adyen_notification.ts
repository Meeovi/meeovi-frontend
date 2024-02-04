import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

/**
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
@TypeGraphQL.ObjectType("Adyen_notification", {
  description: "This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments"
})
export class Adyen_notification {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pspreference?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  original_reference?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  merchant_reference?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  event_code?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  success?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_method?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  amount_value?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  amount_currency?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reason?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  live?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_data?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  done!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  processing?: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  scheduled_processing_time?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  error_count?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  error_message?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;
}
