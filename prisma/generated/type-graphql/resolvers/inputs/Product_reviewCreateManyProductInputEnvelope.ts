import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManyProductInput } from "../inputs/Product_reviewCreateManyProductInput";

@TypeGraphQL.InputType("Product_reviewCreateManyProductInputEnvelope", {})
export class Product_reviewCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_reviewCreateManyProductInput], {
    nullable: false
  })
  data!: Product_reviewCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
