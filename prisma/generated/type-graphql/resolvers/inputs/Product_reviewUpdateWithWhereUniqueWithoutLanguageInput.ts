import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewUpdateWithoutLanguageInput } from "../inputs/Product_reviewUpdateWithoutLanguageInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Product_reviewUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_reviewUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Product_reviewUpdateWithoutLanguageInput;
}
