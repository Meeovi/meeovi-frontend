import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Refresh_token", {})
export class Refresh_token {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  user_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  issued_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expires_at!: Date;
}
