import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagCreateWithoutProductInput } from "../inputs/Product_tagCreateWithoutProductInput";
import { Product_tagUpdateWithoutProductInput } from "../inputs/Product_tagUpdateWithoutProductInput";
import { Product_tagWhereUniqueInput } from "../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.InputType("Product_tagUpsertWithWhereUniqueWithoutProductInput", {})
export class Product_tagUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Product_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_tagUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Product_tagUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_tagCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_tagCreateWithoutProductInput;
}
