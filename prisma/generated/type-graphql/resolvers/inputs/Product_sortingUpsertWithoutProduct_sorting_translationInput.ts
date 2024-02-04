import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sortingCreateWithoutProduct_sorting_translationInput } from "../inputs/Product_sortingCreateWithoutProduct_sorting_translationInput";
import { Product_sortingUpdateWithoutProduct_sorting_translationInput } from "../inputs/Product_sortingUpdateWithoutProduct_sorting_translationInput";
import { Product_sortingWhereInput } from "../inputs/Product_sortingWhereInput";

@TypeGraphQL.InputType("Product_sortingUpsertWithoutProduct_sorting_translationInput", {})
export class Product_sortingUpsertWithoutProduct_sorting_translationInput {
  @TypeGraphQL.Field(_type => Product_sortingUpdateWithoutProduct_sorting_translationInput, {
    nullable: false
  })
  update!: Product_sortingUpdateWithoutProduct_sorting_translationInput;

  @TypeGraphQL.Field(_type => Product_sortingCreateWithoutProduct_sorting_translationInput, {
    nullable: false
  })
  create!: Product_sortingCreateWithoutProduct_sorting_translationInput;

  @TypeGraphQL.Field(_type => Product_sortingWhereInput, {
    nullable: true
  })
  where?: Product_sortingWhereInput | undefined;
}
