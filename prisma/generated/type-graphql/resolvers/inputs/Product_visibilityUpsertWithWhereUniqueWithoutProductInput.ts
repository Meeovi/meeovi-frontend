import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityCreateWithoutProductInput } from "../inputs/Product_visibilityCreateWithoutProductInput";
import { Product_visibilityUpdateWithoutProductInput } from "../inputs/Product_visibilityUpdateWithoutProductInput";
import { Product_visibilityWhereUniqueInput } from "../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.InputType("Product_visibilityUpsertWithWhereUniqueWithoutProductInput", {})
export class Product_visibilityUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_visibilityWhereUniqueInput, {
    nullable: false
  })
  where!: Product_visibilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_visibilityUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Product_visibilityUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_visibilityCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_visibilityCreateWithoutProductInput;
}
