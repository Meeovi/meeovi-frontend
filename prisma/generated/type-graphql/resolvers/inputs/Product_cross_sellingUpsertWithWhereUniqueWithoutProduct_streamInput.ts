import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingCreateWithoutProduct_streamInput } from "../inputs/Product_cross_sellingCreateWithoutProduct_streamInput";
import { Product_cross_sellingUpdateWithoutProduct_streamInput } from "../inputs/Product_cross_sellingUpdateWithoutProduct_streamInput";
import { Product_cross_sellingWhereUniqueInput } from "../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_sellingUpsertWithWhereUniqueWithoutProduct_streamInput", {})
export class Product_cross_sellingUpsertWithWhereUniqueWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => Product_cross_sellingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_sellingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_cross_sellingUpdateWithoutProduct_streamInput, {
    nullable: false
  })
  update!: Product_cross_sellingUpdateWithoutProduct_streamInput;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateWithoutProduct_streamInput, {
    nullable: false
  })
  create!: Product_cross_sellingCreateWithoutProduct_streamInput;
}
