import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Flow_sequenceCreateManyInput", {})
export class Flow_sequenceCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  flow_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  app_flow_action_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  rule_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  action_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  display_group?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  true_case?: boolean | undefined;

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
}
