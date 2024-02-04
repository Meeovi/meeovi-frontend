import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateWithoutLanguageInput } from "../inputs/Product_reviewCreateWithoutLanguageInput";
import { Product_reviewUpdateWithoutLanguageInput } from "../inputs/Product_reviewUpdateWithoutLanguageInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Product_reviewUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_reviewUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Product_reviewUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Product_reviewCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Product_reviewCreateWithoutLanguageInput;
}
