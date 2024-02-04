import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingCreateManyProductInput } from "../inputs/Product_cross_sellingCreateManyProductInput";

@TypeGraphQL.InputType("Product_cross_sellingCreateManyProductInputEnvelope", {})
export class Product_cross_sellingCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateManyProductInput], {
    nullable: false
  })
  data!: Product_cross_sellingCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
