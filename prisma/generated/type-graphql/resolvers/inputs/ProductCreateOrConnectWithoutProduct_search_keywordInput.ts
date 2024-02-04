import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_search_keywordInput } from "../inputs/ProductCreateWithoutProduct_search_keywordInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutProduct_search_keywordInput", {})
export class ProductCreateOrConnectWithoutProduct_search_keywordInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_search_keywordInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_search_keywordInput;
}
