import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Dead_messageCreateManyScheduled_taskInput", {})
export class Dead_messageCreateManyScheduled_taskInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  original_message_class!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  serialized_original_message!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  handler_class!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  encrypted?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  error_count!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  next_execution_time!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  exception!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  exception_message!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  exception_file!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  exception_line!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
