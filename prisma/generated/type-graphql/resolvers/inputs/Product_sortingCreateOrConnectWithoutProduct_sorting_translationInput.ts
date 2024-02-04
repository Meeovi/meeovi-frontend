import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sortingCreateWithoutProduct_sorting_translationInput } from "../inputs/Product_sortingCreateWithoutProduct_sorting_translationInput";
import { Product_sortingWhereUniqueInput } from "../inputs/Product_sortingWhereUniqueInput";

@TypeGraphQL.InputType("Product_sortingCreateOrConnectWithoutProduct_sorting_translationInput", {})
export class Product_sortingCreateOrConnectWithoutProduct_sorting_translationInput {
  @TypeGraphQL.Field(_type => Product_sortingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_sortingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_sortingCreateWithoutProduct_sorting_translationInput, {
    nullable: false
  })
  create!: Product_sortingCreateWithoutProduct_sorting_translationInput;
}
