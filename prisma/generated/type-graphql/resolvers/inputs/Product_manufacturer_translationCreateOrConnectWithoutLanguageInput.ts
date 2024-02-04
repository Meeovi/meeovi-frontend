import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationCreateWithoutLanguageInput } from "../inputs/Product_manufacturer_translationCreateWithoutLanguageInput";
import { Product_manufacturer_translationWhereUniqueInput } from "../inputs/Product_manufacturer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturer_translationCreateOrConnectWithoutLanguageInput", {})
export class Product_manufacturer_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturer_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Product_manufacturer_translationCreateWithoutLanguageInput;
}
