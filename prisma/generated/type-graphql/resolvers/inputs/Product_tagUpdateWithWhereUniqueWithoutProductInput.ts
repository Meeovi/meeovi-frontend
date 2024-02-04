import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagUpdateWithoutProductInput } from "../inputs/Product_tagUpdateWithoutProductInput";
import { Product_tagWhereUniqueInput } from "../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.InputType("Product_tagUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_tagUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Product_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_tagUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_tagUpdateWithoutProductInput;
}
