import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationUpdateWithoutLanguageInput } from "../inputs/Product_sorting_translationUpdateWithoutLanguageInput";
import { Product_sorting_translationWhereUniqueInput } from "../inputs/Product_sorting_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_sorting_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Product_sorting_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_sorting_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_sorting_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_sorting_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Product_sorting_translationUpdateWithoutLanguageInput;
}
