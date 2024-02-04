import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MigrationCreateManyInput", {})
export class MigrationCreateManyInput {
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
  update?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  update_destructive?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;
}
