import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Webhook_event_log", {})
export class Webhook_event_log {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  app_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  webhook_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  event_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  delivery_status!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  timestamp?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  processing_time?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  app_version?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  request_content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  response_content?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  response_status_code?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  response_reason_phrase?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  serialized_webhook_message?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  only_live_version!: boolean;
}
