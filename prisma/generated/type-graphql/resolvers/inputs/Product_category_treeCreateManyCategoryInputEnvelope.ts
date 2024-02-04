import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeCreateManyCategoryInput } from "../inputs/Product_category_treeCreateManyCategoryInput";

@TypeGraphQL.InputType("Product_category_treeCreateManyCategoryInputEnvelope", {})
export class Product_category_treeCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_category_treeCreateManyCategoryInput], {
    nullable: false
  })
  data!: Product_category_treeCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
