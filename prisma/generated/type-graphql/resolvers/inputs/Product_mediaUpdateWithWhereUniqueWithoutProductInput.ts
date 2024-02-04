import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaUpdateWithoutProductInput } from "../inputs/Product_mediaUpdateWithoutProductInput";
import { Product_mediaWhereUniqueInput } from "../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Product_mediaUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_mediaUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Product_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_mediaUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_mediaUpdateWithoutProductInput;
}
