import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryCreateManyCategoryInput } from "../inputs/Product_categoryCreateManyCategoryInput";

@TypeGraphQL.InputType("Product_categoryCreateManyCategoryInputEnvelope", {})
export class Product_categoryCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_categoryCreateManyCategoryInput], {
    nullable: false
  })
  data!: Product_categoryCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
