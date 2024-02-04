import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamUpdateWithoutProduct_cross_sellingInput } from "../inputs/Product_streamUpdateWithoutProduct_cross_sellingInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamUpdateToOneWithWhereWithoutProduct_cross_sellingInput", {})
export class Product_streamUpdateToOneWithWhereWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateWithoutProduct_cross_sellingInput, {
    nullable: false
  })
  data!: Product_streamUpdateWithoutProduct_cross_sellingInput;
}
