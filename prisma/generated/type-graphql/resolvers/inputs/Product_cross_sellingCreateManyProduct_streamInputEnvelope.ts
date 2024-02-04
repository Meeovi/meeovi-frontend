import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingCreateManyProduct_streamInput } from "../inputs/Product_cross_sellingCreateManyProduct_streamInput";

@TypeGraphQL.InputType("Product_cross_sellingCreateManyProduct_streamInputEnvelope", {})
export class Product_cross_sellingCreateManyProduct_streamInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateManyProduct_streamInput], {
    nullable: false
  })
  data!: Product_cross_sellingCreateManyProduct_streamInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
