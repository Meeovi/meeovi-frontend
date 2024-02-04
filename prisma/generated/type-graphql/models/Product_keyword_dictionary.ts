import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Language } from "../models/Language";

@TypeGraphQL.ObjectType("Product_keyword_dictionary", {})
export class Product_keyword_dictionary {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  keyword!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reversed?: string | null;

  language?: Language;
}
