import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordUpdateWithoutProductInput } from "../inputs/Product_search_keywordUpdateWithoutProductInput";
import { Product_search_keywordWhereUniqueInput } from "../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_keywordUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_search_keywordUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_search_keywordWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_keywordWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_search_keywordUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_search_keywordUpdateWithoutProductInput;
}
