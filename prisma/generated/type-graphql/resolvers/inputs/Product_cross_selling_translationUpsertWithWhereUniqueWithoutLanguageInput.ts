import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_translationCreateWithoutLanguageInput } from "../inputs/Product_cross_selling_translationCreateWithoutLanguageInput";
import { Product_cross_selling_translationUpdateWithoutLanguageInput } from "../inputs/Product_cross_selling_translationUpdateWithoutLanguageInput";
import { Product_cross_selling_translationWhereUniqueInput } from "../inputs/Product_cross_selling_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_selling_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Product_cross_selling_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_selling_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Product_cross_selling_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Product_cross_selling_translationCreateWithoutLanguageInput;
}
