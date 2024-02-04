import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_translationCreateManyProduct_cross_sellingInput } from "../inputs/Product_cross_selling_translationCreateManyProduct_cross_sellingInput";

@TypeGraphQL.InputType("Product_cross_selling_translationCreateManyProduct_cross_sellingInputEnvelope", {})
export class Product_cross_selling_translationCreateManyProduct_cross_sellingInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_cross_selling_translationCreateManyProduct_cross_sellingInput], {
    nullable: false
  })
  data!: Product_cross_selling_translationCreateManyProduct_cross_sellingInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
