import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagCreateWithoutTagInput } from "../inputs/Product_tagCreateWithoutTagInput";
import { Product_tagUpdateWithoutTagInput } from "../inputs/Product_tagUpdateWithoutTagInput";
import { Product_tagWhereUniqueInput } from "../inputs/Product_tagWhereUniqueInput";

@TypeGraphQL.InputType("Product_tagUpsertWithWhereUniqueWithoutTagInput", {})
export class Product_tagUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => Product_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Product_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_tagUpdateWithoutTagInput, {
    nullable: false
  })
  update!: Product_tagUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => Product_tagCreateWithoutTagInput, {
    nullable: false
  })
  create!: Product_tagCreateWithoutTagInput;
}
