import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_search_keywordInput } from "../inputs/ProductCreateOrConnectWithoutProduct_search_keywordInput";
import { ProductCreateWithoutProduct_search_keywordInput } from "../inputs/ProductCreateWithoutProduct_search_keywordInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_search_keywordInput", {})
export class ProductCreateNestedOneWithoutProduct_search_keywordInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_search_keywordInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_search_keywordInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_search_keywordInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_search_keywordInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
