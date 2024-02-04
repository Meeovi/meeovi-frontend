import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_keyword_dictionaryCreateManyLanguageInput } from "../inputs/Product_keyword_dictionaryCreateManyLanguageInput";

@TypeGraphQL.InputType("Product_keyword_dictionaryCreateManyLanguageInputEnvelope", {})
export class Product_keyword_dictionaryCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryCreateManyLanguageInput], {
    nullable: false
  })
  data!: Product_keyword_dictionaryCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
