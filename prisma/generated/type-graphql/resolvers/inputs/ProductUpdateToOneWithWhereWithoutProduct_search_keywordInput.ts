import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_search_keywordInput } from "../inputs/ProductUpdateWithoutProduct_search_keywordInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_search_keywordInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_search_keywordInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_search_keywordInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_search_keywordInput;
}
