import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_translationUpdateWithoutLanguageInput } from "../inputs/Product_cross_selling_translationUpdateWithoutLanguageInput";
import { Product_cross_selling_translationWhereUniqueInput } from "../inputs/Product_cross_selling_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_selling_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Product_cross_selling_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_selling_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Product_cross_selling_translationUpdateWithoutLanguageInput;
}
