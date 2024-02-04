import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordScalarWhereInput } from "../inputs/Product_search_keywordScalarWhereInput";
import { Product_search_keywordUpdateManyMutationInput } from "../inputs/Product_search_keywordUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_search_keywordUpdateManyWithWhereWithoutLanguageInput", {})
export class Product_search_keywordUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_search_keywordScalarWhereInput, {
    nullable: false
  })
  where!: Product_search_keywordScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_search_keywordUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_search_keywordUpdateManyMutationInput;
}
