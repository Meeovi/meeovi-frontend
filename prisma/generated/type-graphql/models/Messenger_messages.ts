import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Messenger_messages", {})
export class Messenger_messages {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  headers!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  queue_name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  available_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  delivered_at?: Date | null;
}
