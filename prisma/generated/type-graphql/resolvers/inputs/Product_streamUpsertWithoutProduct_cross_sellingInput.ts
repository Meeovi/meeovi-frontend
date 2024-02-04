import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateWithoutProduct_cross_sellingInput } from "../inputs/Product_streamCreateWithoutProduct_cross_sellingInput";
import { Product_streamUpdateWithoutProduct_cross_sellingInput } from "../inputs/Product_streamUpdateWithoutProduct_cross_sellingInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamUpsertWithoutProduct_cross_sellingInput", {})
export class Product_streamUpsertWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => Product_streamUpdateWithoutProduct_cross_sellingInput, {
    nullable: false
  })
  update!: Product_streamUpdateWithoutProduct_cross_sellingInput;

  @TypeGraphQL.Field(_type => Product_streamCreateWithoutProduct_cross_sellingInput, {
    nullable: false
  })
  create!: Product_streamCreateWithoutProduct_cross_sellingInput;

  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;
}
