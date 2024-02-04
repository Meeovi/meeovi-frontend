import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Migration", {})
export class Migration {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  class!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  creation_timestamp!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  update?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  update_destructive?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | null;
}
