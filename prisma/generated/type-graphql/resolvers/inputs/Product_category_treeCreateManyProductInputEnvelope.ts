import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeCreateManyProductInput } from "../inputs/Product_category_treeCreateManyProductInput";

@TypeGraphQL.InputType("Product_category_treeCreateManyProductInputEnvelope", {})
export class Product_category_treeCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_category_treeCreateManyProductInput], {
    nullable: false
  })
  data!: Product_category_treeCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
