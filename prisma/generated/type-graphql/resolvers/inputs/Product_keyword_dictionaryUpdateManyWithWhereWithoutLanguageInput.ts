import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_keyword_dictionaryScalarWhereInput } from "../inputs/Product_keyword_dictionaryScalarWhereInput";
import { Product_keyword_dictionaryUpdateManyMutationInput } from "../inputs/Product_keyword_dictionaryUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_keyword_dictionaryUpdateManyWithWhereWithoutLanguageInput", {})
export class Product_keyword_dictionaryUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_keyword_dictionaryScalarWhereInput, {
    nullable: false
  })
  where!: Product_keyword_dictionaryScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_keyword_dictionaryUpdateManyMutationInput;
}
