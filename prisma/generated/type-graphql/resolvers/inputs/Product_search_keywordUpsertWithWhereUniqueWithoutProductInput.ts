import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordCreateWithoutProductInput } from "../inputs/Product_search_keywordCreateWithoutProductInput";
import { Product_search_keywordUpdateWithoutProductInput } from "../inputs/Product_search_keywordUpdateWithoutProductInput";
import { Product_search_keywordWhereUniqueInput } from "../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_keywordUpsertWithWhereUniqueWithoutProductInput", {})
export class Product_search_keywordUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_search_keywordWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_keywordWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_search_keywordUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Product_search_keywordUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_search_keywordCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_search_keywordCreateWithoutProductInput;
}
