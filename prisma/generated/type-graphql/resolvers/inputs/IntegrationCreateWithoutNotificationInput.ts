import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateNestedManyWithoutIntegrationInput } from "../inputs/AppCreateNestedManyWithoutIntegrationInput";
import { Integration_roleCreateNestedManyWithoutIntegrationInput } from "../inputs/Integration_roleCreateNestedManyWithoutIntegrationInput";

@TypeGraphQL.InputType("IntegrationCreateWithoutNotificationInput", {})
export class IntegrationCreateWithoutNotificationInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  write_access?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  access_key!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  secret_access_key!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  label!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  admin?: boolean | undefined;

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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_usage_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deleted_at?: Date | undefined;

  @TypeGraphQL.Field(_type => AppCreateNestedManyWithoutIntegrationInput, {
    nullable: true
  })
  app?: AppCreateNestedManyWithoutIntegrationInput | undefined;

  @TypeGraphQL.Field(_type => Integration_roleCreateNestedManyWithoutIntegrationInput, {
    nullable: true
  })
  integration_role?: Integration_roleCreateNestedManyWithoutIntegrationInput | undefined;
}
