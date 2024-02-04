import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_search_keywordInput } from "../inputs/ProductCreateWithoutProduct_search_keywordInput";
import { ProductUpdateWithoutProduct_search_keywordInput } from "../inputs/ProductUpdateWithoutProduct_search_keywordInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_search_keywordInput", {})
export class ProductUpsertWithoutProduct_search_keywordInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_search_keywordInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_search_keywordInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_search_keywordInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_search_keywordInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
