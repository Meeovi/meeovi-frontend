import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceCreateManyProductInput } from "../inputs/Product_priceCreateManyProductInput";

@TypeGraphQL.InputType("Product_priceCreateManyProductInputEnvelope", {})
export class Product_priceCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_priceCreateManyProductInput], {
    nullable: false
  })
  data!: Product_priceCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
