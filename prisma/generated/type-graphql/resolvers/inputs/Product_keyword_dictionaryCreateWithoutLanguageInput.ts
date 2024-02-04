import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Product_keyword_dictionaryCreateWithoutLanguageInput", {})
export class Product_keyword_dictionaryCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  keyword!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reversed?: string | undefined;
}
