import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryCreateWithoutProductInput } from "../inputs/Product_categoryCreateWithoutProductInput";
import { Product_categoryUpdateWithoutProductInput } from "../inputs/Product_categoryUpdateWithoutProductInput";
import { Product_categoryWhereUniqueInput } from "../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Product_categoryUpsertWithWhereUniqueWithoutProductInput", {})
export class Product_categoryUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Product_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_categoryUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Product_categoryUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_categoryCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_categoryCreateWithoutProductInput;
}
