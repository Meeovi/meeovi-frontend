import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationUpdateWithoutProductInput } from "../inputs/Product_translationUpdateWithoutProductInput";
import { Product_translationWhereUniqueInput } from "../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_translationUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_translationUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_translationUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_translationUpdateWithoutProductInput;
}
