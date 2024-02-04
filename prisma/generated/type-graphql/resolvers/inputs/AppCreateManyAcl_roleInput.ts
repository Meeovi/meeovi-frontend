import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AppCreateManyAcl_roleInput", {})
export class AppCreateManyAcl_roleInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  path!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyright?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  license?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  privacy?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  version!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  base_app_url?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  allow_disable?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  configurable?: boolean | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  icon?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  app_secret?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modules?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  main_module?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cookies?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allowed_hosts?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  integration_id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  template_load_priority?: number | undefined;
}
