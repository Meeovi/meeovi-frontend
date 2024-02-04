import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationCreateWithoutLanguageInput } from "../inputs/Product_translationCreateWithoutLanguageInput";
import { Product_translationUpdateWithoutLanguageInput } from "../inputs/Product_translationUpdateWithoutLanguageInput";
import { Product_translationWhereUniqueInput } from "../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Product_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Product_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Product_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Product_translationCreateWithoutLanguageInput;
}
