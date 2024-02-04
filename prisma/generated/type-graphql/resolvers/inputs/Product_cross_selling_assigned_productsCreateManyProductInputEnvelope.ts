import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_assigned_productsCreateManyProductInput } from "../inputs/Product_cross_selling_assigned_productsCreateManyProductInput";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsCreateManyProductInputEnvelope", {})
export class Product_cross_selling_assigned_productsCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsCreateManyProductInput], {
    nullable: false
  })
  data!: Product_cross_selling_assigned_productsCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
