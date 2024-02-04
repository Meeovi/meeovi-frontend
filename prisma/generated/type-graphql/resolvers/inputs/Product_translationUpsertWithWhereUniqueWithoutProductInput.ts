import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationCreateWithoutProductInput } from "../inputs/Product_translationCreateWithoutProductInput";
import { Product_translationUpdateWithoutProductInput } from "../inputs/Product_translationUpdateWithoutProductInput";
import { Product_translationWhereUniqueInput } from "../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_translationUpsertWithWhereUniqueWithoutProductInput", {})
export class Product_translationUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_translationUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Product_translationUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_translationCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_translationCreateWithoutProductInput;
}
