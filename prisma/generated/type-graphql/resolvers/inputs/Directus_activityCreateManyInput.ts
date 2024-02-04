import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Directus_activityCreateManyInput", {})
export class Directus_activityCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  action!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  timestamp?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ip?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_agent?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  collection!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  item!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  origin?: string | undefined;
}
