import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sales_channel_domain } from "../models/Sales_channel_domain";
import { Snippet } from "../models/Snippet";
import { Snippet_setCount } from "../resolvers/outputs/Snippet_setCount";

@TypeGraphQL.ObjectType("Snippet_set", {})
export class Snippet_set {
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
  base_file!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  iso!: string;

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

  sales_channel_domain?: Sales_channel_domain[];

  snippet?: Snippet[];

  @TypeGraphQL.Field(_type => Snippet_setCount, {
    nullable: true
  })
  _count?: Snippet_setCount | null;
}
