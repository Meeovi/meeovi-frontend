import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProduct_product_main_variant_idToproductInput } from "../inputs/ProductCreateManyProduct_product_main_variant_idToproductInput";

@TypeGraphQL.InputType("ProductCreateManyProduct_product_main_variant_idToproductInputEnvelope", {})
export class ProductCreateManyProduct_product_main_variant_idToproductInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyProduct_product_main_variant_idToproductInput], {
    nullable: false
  })
  data!: ProductCreateManyProduct_product_main_variant_idToproductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
