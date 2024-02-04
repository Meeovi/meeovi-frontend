import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App } from "../models/App";
import { Integration_role } from "../models/Integration_role";
import { Notification } from "../models/Notification";
import { IntegrationCount } from "../resolvers/outputs/IntegrationCount";

@TypeGraphQL.ObjectType("Integration", {})
export class Integration {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  write_access!: boolean;

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
    nullable: false
  })
  admin!: boolean;

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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_usage_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deleted_at?: Date | null;

  app?: App[];

  integration_role?: Integration_role[];

  notification?: Notification[];

  @TypeGraphQL.Field(_type => IntegrationCount, {
    nullable: true
  })
  _count?: IntegrationCount | null;
}
