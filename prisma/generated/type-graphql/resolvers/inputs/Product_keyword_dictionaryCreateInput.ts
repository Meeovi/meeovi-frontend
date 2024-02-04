import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageCreateNestedOneWithoutProduct_keyword_dictionaryInput";

@TypeGraphQL.InputType("Product_keyword_dictionaryCreateInput", {})
export class Product_keyword_dictionaryCreateInput {
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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutProduct_keyword_dictionaryInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutProduct_keyword_dictionaryInput;
}
