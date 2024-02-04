import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("App_payment_methodCreateManyAppInput", {})
export class App_payment_methodCreateManyAppInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  payment_method_id!: Buffer;

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

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  original_media_id?: Buffer | undefined;

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
}
