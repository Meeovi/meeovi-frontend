import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationScalarWhereInput } from "../inputs/Product_sorting_translationScalarWhereInput";
import { Product_sorting_translationUpdateManyMutationInput } from "../inputs/Product_sorting_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_sorting_translationUpdateManyWithWhereWithoutProduct_sortingInput", {})
export class Product_sorting_translationUpdateManyWithWhereWithoutProduct_sortingInput {
  @TypeGraphQL.Field(_type => Product_sorting_translationScalarWhereInput, {
    nullable: false
  })
  where!: Product_sorting_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_sorting_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_sorting_translationUpdateManyMutationInput;
}
