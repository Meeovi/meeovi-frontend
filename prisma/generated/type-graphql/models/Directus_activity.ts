import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Directus_activity", {})
export class Directus_activity {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  action!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timestamp!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ip?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_agent?: string | null;

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
  comment?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  origin?: string | null;
}
