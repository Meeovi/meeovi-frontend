import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sortingCreateOrConnectWithoutProduct_sorting_translationInput } from "../inputs/Product_sortingCreateOrConnectWithoutProduct_sorting_translationInput";
import { Product_sortingCreateWithoutProduct_sorting_translationInput } from "../inputs/Product_sortingCreateWithoutProduct_sorting_translationInput";
import { Product_sortingWhereUniqueInput } from "../inputs/Product_sortingWhereUniqueInput";

@TypeGraphQL.InputType("Product_sortingCreateNestedOneWithoutProduct_sorting_translationInput", {})
export class Product_sortingCreateNestedOneWithoutProduct_sorting_translationInput {
  @TypeGraphQL.Field(_type => Product_sortingCreateWithoutProduct_sorting_translationInput, {
    nullable: true
  })
  create?: Product_sortingCreateWithoutProduct_sorting_translationInput | undefined;

  @TypeGraphQL.Field(_type => Product_sortingCreateOrConnectWithoutProduct_sorting_translationInput, {
    nullable: true
  })
  connectOrCreate?: Product_sortingCreateOrConnectWithoutProduct_sorting_translationInput | undefined;

  @TypeGraphQL.Field(_type => Product_sortingWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_sortingWhereUniqueInput | undefined;
}
