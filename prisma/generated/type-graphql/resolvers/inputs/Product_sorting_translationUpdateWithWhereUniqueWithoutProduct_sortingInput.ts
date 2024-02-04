import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationUpdateWithoutProduct_sortingInput } from "../inputs/Product_sorting_translationUpdateWithoutProduct_sortingInput";
import { Product_sorting_translationWhereUniqueInput } from "../inputs/Product_sorting_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_sorting_translationUpdateWithWhereUniqueWithoutProduct_sortingInput", {})
export class Product_sorting_translationUpdateWithWhereUniqueWithoutProduct_sortingInput {
  @TypeGraphQL.Field(_type => Product_sorting_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_sorting_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_sorting_translationUpdateWithoutProduct_sortingInput, {
    nullable: false
  })
  data!: Product_sorting_translationUpdateWithoutProduct_sortingInput;
}
